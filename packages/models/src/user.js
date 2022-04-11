// DEPENDENCIES
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

//IMPORTS
const { validator } = require('@virkefeltet/core');

// USER SCHEMA
const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, 'Indtast venligst dit fornavn'],
            trim: true
        },
        surname: {
            type: String,
            required: [true, 'Indtast venligst dit efternavn'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Indtast venligst din email'],
            unique: true,
            lowercase: true,
            validate: [validator.isEmail, 'Indtast venligst en korrekt email']
        },
        phone: {
            type: Number,
            minlength: 8,
            maxlength: 8
        },
        password: {
            type: String,
            required: [true, 'Indtast venligst et kodeord'],
            minlength: 8,
            select: false
        },
        passwordConfirm: {
            type: String,
            required: [true, 'Bekræft venligst dit kodeord'],
            validate: {
                validator: function (element) {
                    return element === this.password;
                },
                message: 'De indtaste kodeord er ikke ens'
            },
            select: false
        },
        passwordChangedAt: {
            type: Date,
            select: false
        },
        passwordResetToken: {
            type: String,
            select: false
        },
        passwordResetExpiration: {
            type: Date,
            select: false
        },
        image: {
            type: String
        },
        role: {
            type: String,
            enum: ['bruger', 'administrator'],
            default: 'bruger'
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

//MIDDLEWARES
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10);

    this.passwordConfirm = undefined;

    next();
});

userSchema.methods.validatePassword = async function (
    formPassword,
    databasePassword
) {
    return await bcrypt.compare(formPassword, databasePassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );

        return JWTTimestamp < changedTimestamp;
    }

    return false;
};

// EXPORT USER MODEL
module.exports = mongoose.model('User', userSchema);
