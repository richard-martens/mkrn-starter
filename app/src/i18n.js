
import { setLocale, setTranslations } from 'react-i18nify';
import { getClientLanguage } from './util/i18n-util';

const translations = {
    en: {
        dashboard: {
            welcomeText: "Welcome to the dashboard"
        },
        forgotPassword: {
            backToLogin: "Back to login",
            email: "Email",
            submit: "Reset Password",
            title: "Forgot Password"
        },
        header: {
            dashboard: 'Dashboard',
            login: "Sign in",
            logout: "Sign out",
            profile: "Profile",
            register: "Register",
            settings: "Settings"
        },
        login: {
            email: "Email",
            createNewAccount: "Create a new account.",
            forgotPassword: "Forgot password?",
            submit: "Login",
            title: "Login",
            password: "Password"
        },
        register: {
            confirmPassword: "Confirm Password",
            email: 'Email',
            emailExample: 'you@yourdomain.com',
            firstName: "First Name",
            firstNameExample: "John",
            haveAccount: "Have an account?",
            lastName: "Last Name",
            lastNameExample: "Snow",
            password: "Password",
            submit: "Register",
            title: "Register"
        },
        resetPassword: {
            confirmPassword: "Confirm Password",
            password: "Password",
            submit: "Change Password",
            title: "Reset Password"
        },
        settings: {
            registerOn: "New users are allowed to register themselves",
            submit: "Save",
            title: "Settings"
        }
    },
    de: {
        dashboard: {
            welcomeText: "Willkommen im Dashboard"
        },
        forgotPassword: {
            backToLogin: "Zurück zur Anmeldung",
            email: "Email",
            submit: "Kennwort zurücksetzen",
            title: "Kennwort vergessen"
        },
        header: {
            dashboard: 'Dashboard',
            login: "Anmelden",
            logout: "Abmelden",
            profile: "Profil",
            register: "Registrieren",
            settings: "Einstellungen"
        },
        login: {
            email: "Email",
            createNewAccount: "Neues Konto anlegen.",
            forgotPassword: "Passwort vergessen?",
            submit: "Anmelden",
            title: "Anmelden",
            password: "Kennwort"
        },
        register: {
            confirmPassword: "Kennwort wiederholen",
            email: 'Email',
            emailExample: 'max.mustermann@yourdomain.com',
            firstName: "Vorname",
            firstNameExample: "Max",
            haveAccount: "Schon registriert?",
            lastName: "Nachname",
            lastNameExample: "Mustermann",
            password: "Kennwort",
            submit: "Registrieren",
            title: "Registrieren"
        },
        resetPassword: {
            confirmPassword: "Kennwort wiederholen",
            password: "Kennwort",
            submit: "Kennwort ändern",
            title: "Kennwort zurücksetzen"
        },
        settings: {
            registerOn: "Neue Benutzer dürfen sich selbst registrieren",
            submit: "Speichern",
            title: "Einstellungen"
        }
    }
};

setTranslations(translations);
setLocale(getClientLanguage() || 'en');

export default translations;
