// import { z } from "zod";
// import {
//     InsuranceCardType,
//     PatientDiagnosisType,
//     PaymentOptionsType,
//     TreatmentShiftsType,
//     TreatmentTypesType
// } from "./clinic-types";


// export type FormHeaderType = {
//     title: string;
//     description?: string;
// };

// export const PatientLoginSchema = z.object({
//     email: z.string({
//         required_error: "Email address is required",
//     }).trim().email({
//         message: "Not a valid email address",
//     }),
//     password: z.string({
//         required_error: "Password is required",
//     }).min(1, {
//         message: "Please enter your password"
//     }),
// })
