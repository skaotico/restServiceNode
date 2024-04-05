import zod from 'zod';
import {
    ERROR_USERNAME_REQUERIDO,
    CANTIDAD_MAXIMA_CARACTERES_USERNAME,
    CANTIDAD_MINIMA_CARACTERES_USERNAME,
    ERROR_USERNAME_MAX_LARGO,
    ERROR_USERNAME_MIN_LARGO,
    ERROR_EMAIL_REQUERIDO,
    ERROR_EMAIL_FORMATO,
    ERROR_PASS_REQUERIDO,
    CANTIDAD_MAXIMA_CARACTERES_PASS,
    CANTIDAD_MINIMA_CARACTERES_PASS,
    ERROR_PASS_MAX_LARGO,
    ERROR_PASS_MIN_LARGO

} from '../config.js';

export const registerSchema = zod.object({

    userName: zod.string({
        required_error: ERROR_USERNAME_REQUERIDO,message:ERROR_USERNAME_REQUERIDO
    }).min(CANTIDAD_MINIMA_CARACTERES_USERNAME, {
        required_error: ERROR_USERNAME_MIN_LARGO, message:ERROR_USERNAME_MIN_LARGO
    }).max(CANTIDAD_MAXIMA_CARACTERES_USERNAME, {
        required_error: ERROR_USERNAME_MAX_LARGO, message:ERROR_USERNAME_MAX_LARGO
    }),
    email: zod.string({
        required_error: ERROR_EMAIL_REQUERIDO, message:ERROR_EMAIL_REQUERIDO
    }).email({
        required_error: ERROR_EMAIL_FORMATO,message:ERROR_EMAIL_FORMATO
    }),
    password: zod.string({
        required_error: ERROR_PASS_REQUERIDO,message:ERROR_PASS_REQUERIDO
    }).min(CANTIDAD_MINIMA_CARACTERES_PASS, {
        required_error: ERROR_PASS_MIN_LARGO,message:ERROR_PASS_MIN_LARGO
    }).max(CANTIDAD_MAXIMA_CARACTERES_PASS, { required_error: ERROR_PASS_MAX_LARGO,message:ERROR_PASS_MAX_LARGO })
});


export const loginSchema = zod.object({
    email: zod.string({
        required_error: ERROR_EMAIL_REQUERIDO
    }).email({
        required_error: ERROR_EMAIL_FORMATO,
        message:ERROR_EMAIL_FORMATO
    }),
    password: zod.string({
        required_error: ERROR_PASS_REQUERIDO,
        message:ERROR_PASS_REQUERIDO
    }).min(CANTIDAD_MINIMA_CARACTERES_PASS, {
        required_error: ERROR_PASS_MIN_LARGO,
        message:ERROR_PASS_MIN_LARGO
    }).max(CANTIDAD_MAXIMA_CARACTERES_PASS, { required_error: ERROR_PASS_MAX_LARGO, message:ERROR_PASS_MAX_LARGO })
})