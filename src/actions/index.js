import { INCREASE, DECREASE, RESET } from "../constants/action-types";

export const handleIncrease = () => {
  return {
    type: INCREASE
  };
};

export const handleDecrease = () => {
  return {
    type: DECREASE
  };
};

export const handleReset = () => {
  return {
    type: RESET
  };
};
