import React from "react";

export interface IResetFormProps {
  setShowResetForm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}