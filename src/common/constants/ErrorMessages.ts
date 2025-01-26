import { IError } from '../interfaces/IError';

export class ErrorMessages {
  public static messages: ErrorMessages = {
    forgot_password_message: { code: 1002, message: 'forgot_password_message' },
    account_already_registered: {
      code: 1003,
      message: 'account_already_registered',
    },
    wrong_credentials: { code: 1004, message: 'wrong_credentials' },
    account_has_been_deleted: {
      code: 1005,
      message: 'account_has_been_deleted',
    },
    password_dont_match: { code: 1006, message: 'password_dont_match' },
    old_password_missing: { code: 1007, message: 'old_password_missing' },
    company_data_changed_successfully: {
      code: 1008,
      message: 'company_data_changed_successfully',
    },
    password_changed_successfully: {
      code: 1009,
      message: 'password_changed_successfully',
    },
    loading_date_is_in_the_past: {
      code: 1010,
      message: 'loading_date_is_in_the_past',
    },
    token_invalid: { code: 1011, message: 'token_invalid' },
    forbidden: { code: 1012, message: 'forbidden' },
    email_not_confirmed: { code: 1013, message: 'email_not_confirmed' },
    account_not_activated_by_admin: {
      code: 1014,
      message: 'account_not_activated_by_admin',
    },
    account_has_been_suspended: {
      code: 1015,
      message: 'account_has_been_suspended',
    },
    something_went_wrong: { code: 106, message: 'something_went_wrong' },
    offer_not_found: { code: 1015, message: 'offer_not_found' },
    post_not_found: { code: 1022, message: 'post_not_found' },
    no_post_registred: { code: 1023, message: 'no_post_registred' },
    no_active_loads_found: { code: 1024, message: 'no_active_loads_found' },
    company_not_found: { code: 1025, message: 'company_not_found' },
    user_not_found: { code: 1017, message: 'user_not_found' },
    account_already_activated: {
      code: 1018,
      message: 'account_already_activated',
    },
    no_post_templates_registred: {
      code: 1023,
      message: 'no_post_templates_registred',
    },
    post_template_not_found: { code: 1024, message: 'post_template_not_found' },

    // AdditionCase added new error messages: user_not_found, account_already_activated, no_users_registred, company_not_found, account_already_deleted
    no_users_registred: { code: 1019, message: 'no_users_registred' },
    account_already_deleted: { code: 1021, message: 'account_already_deleted' },
    conversation_not_found: { code: 1027, message: 'conversation_not_found' },
    no_offers_found: { code: 1025, message: 'no_offer_found' },
    no_notifications_found: { code: 1026, message: 'no_notifications_found' },
    status_cannot_be_changed: {
      code: 1027,
      message: 'status_cannot_be_changed',
    },

    // MSC-BEST-MATCH-NESTJS
    insertion_failed: { code: 1028, message: 'insertion_failed' },
    record_update_failed: { code: 1029, message: 'record_update_failed' },
    record_not_found: { code: 1030, message: 'record_not_found' },
    delete_operation_failed: { code: 1031, message: 'delete_operation_failed' },
    no_result: { code: 1032, message: 'no_result' },
    best_match_failed: { code: 1033, message: 'best_match_failed' },
    required_fields_empty: {code: 1042, message: 'required_fields_empty' },

    // MSC-PUSH-NOTIFICATION-NESTJS
    firebase_token_not_found: {
      code: 1034,
      message: 'firebase_token_not_found',
    },
    unsubscribe_failed: { code: 1035, message: 'unsubscribe_failed' },
    subscription_failed: { code: 1036, message: 'subscription_failed' },

    // MSC-EMAIL-NESTJS
    not_authorized: { code: 1037, message: 'not_authorized' },

    // MSC-INVITATION-NESTJS
    invitation_failed: { code: 1038, message: 'invitation_failed' },
    invitation_expired: { code: 1039, message: 'invitation_expired' },
    reset_password_token_expired: {
      code: 1040,
      message: 'reset_password_token_expired',
    },
    we_are_evaluating_your_cargo: {
      code: 1041,
      message: 'We are evaluating your cargo',
    },

    invoice_not_found: { code: 1042, message: 'invoice_not_found' },

  };
}

export interface ErrorMessages {
  forgot_password_message: IError;
  account_already_registered: IError;
  wrong_credentials: IError;
  account_has_been_deleted: IError;
  password_dont_match: IError;
  password_changed_successfully: IError;
  reset_password_token_expired: IError;
  old_password_missing: IError;
  company_data_changed_successfully: IError;
  loading_date_is_in_the_past: IError;
  forbidden: IError;
  token_invalid: IError;
  email_not_confirmed: IError;
  account_not_activated_by_admin: IError;
  account_has_been_suspended: IError;
  something_went_wrong: IError;

  //Post
  post_not_found: IError;
  no_post_registred: IError;
  no_active_loads_found: IError;
  no_post_templates_registred: IError;
  post_template_not_found: IError;

  // Offer
  offer_not_found: IError;

  // Invoice
  invoice_not_found: IError;

  // User
  user_not_found: IError;
  account_already_activated: IError;
  no_users_registred: IError;
  account_already_deleted: IError;

  // Company
  company_not_found: IError;
  // Conversation
  conversation_not_found: IError;
  no_offers_found: IError;
  status_cannot_be_changed: IError;
  //Notifications
  no_notifications_found: IError;

  // MSC-BEST-MATCH-NESTJS
  insertion_failed: IError;
  record_update_failed: IError;
  record_not_found: IError;
  delete_operation_failed: IError;
  no_result: IError;
  best_match_failed: IError;
  required_fields_empty: IError;

  // MSC-PUSH-NOTIFICATION-NESTJS
  firebase_token_not_found: IError;
  unsubscribe_failed: IError;
  subscription_failed: IError;

  // MSC-EMAIL-NESTJS
  not_authorized: IError;

  // MSC-INVITATION-NESTJS
  invitation_failed: IError;
  invitation_expired: IError;
  we_are_evaluating_your_cargo: IError;
}
