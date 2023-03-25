import React, { Fragment } from "react";
import { AddReservationSteps } from "src/shared/types/reservation";

interface ReservationStepProps {
  currentStep?: AddReservationSteps;
}

const ReservationStep = ({ currentStep }: ReservationStepProps) => {
  return (
    <div className="flex gap-x-3 items-center justify-center">
      {[
        AddReservationSteps.RoomReservation,
        AddReservationSteps.FillOrderData,
        AddReservationSteps.ConfirmOrder,
      ].map((step: AddReservationSteps, idx: number) => (
        <Fragment key={step}>
          <div className="flex gap-x-2 items-center">
            <span
              className={`w-5 h-5 inline-flex items-center justify-center rounded-full border ${
                currentStep === step || (!currentStep && idx === 0)
                  ? "border-green-600 bg-green-100 text-green-600"
                  : "border-gray-400 text-gray-400"
              } text-sm`}
            >
              {idx + 1}
            </span>
            <span className="text-gray-600 text-sm">{step}</span>
          </div>
          {idx < 2 && <span className="w-16 h-[1px] bg-gray-400" />}
        </Fragment>
      ))}
    </div>
  );
};

export default ReservationStep;
