import React from "react";

export interface IToastProps {
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISCToastProps {
  showToast: boolean;
}