/*
 * @flow
 */

import { actionType } from '../../core/Constants/index';

const setActiveItem = (id, itemIndex) => ({ type: actionType.UPDATE_ACTIVE_ITEM, itemIndex });
const setListItems = value => ({ type: actionType.UPDATE_LIST, value });

export default {
  setActiveItem,
  setListItems
};

