import _ from 'lodash';
import { APP_NAMESPACE, SUCCESS } from '../../util/redux-constants';
import { put, post, get, del } from '../../util/http-utils';
import { updateStore, buildGenericInitialState, handleError } from '../../util/store-utils';

const SETTINGS_ENDPOINT_BASE = 'setting';
const typeBase = `${APP_NAMESPACE}/${SETTINGS_ENDPOINT_BASE}/`;

// Constants
export const CHANGE_SETTINGS = `${typeBase}CHANGE_SETTINGS`,
  READ_ALL = `${typeBase}READ_ALL`;

// Actions

/**
 * all - read protected and public settings
 * @returns {Promise}
 */
export const readAll = () => async (dispatch) => {
  try {
    const response = await get(dispatch, READ_ALL, `${SETTINGS_ENDPOINT_BASE}/all`, true);
    return Promise.resolve(response);
  } catch (err) {
    await handleError(dispatch, err, READ_ALL);
  }
};

export const changeSettings = (payload) => async (dispatch) => {
  try {
    console.log(payload);
    const response = await put(dispatch, CHANGE_SETTINGS, `${SETTINGS_ENDPOINT_BASE}/all`, payload, true);
    return Promise.resolve(response);
  } catch (err) {
    await handleError(dispatch, err, CHANGE_SETTINGS);
  }
}

// Store
const INITIAL_STATE = {
  ...buildGenericInitialState([CHANGE_SETTINGS, READ_ALL]),
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return updateStore(state, action, _.get(action, 'payload.settings')
        ? {
          settings: action.payload.settings
        }
        : {});

    case READ_ALL:
      var newState = updateStore(state, action, _.get(action, 'payload.settings'));

      if (action.meta.status === SUCCESS) {
        newState.settings = action.payload.settings;
      }

      return newState;

    default:
      return state;
  }
};
