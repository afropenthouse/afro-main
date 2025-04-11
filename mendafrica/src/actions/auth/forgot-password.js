"use server";

import db from "@/lib/db";
import { generatePasswordResetToken } from "@/lib/token";
import { sendPasswordResetMail } from "@/lib/mail";

export const forgotPassword = async (email) => {
  try {
    const user = await db.user.findUnique({
      where: { email }
    });

    if (!user) {
      return { error: "Email not found!" };
    }

    // Generate reset token
    const passwordResetToken = await generatePasswordResetToken(email);

    // Send reset email
    await sendPasswordResetMail(
      passwordResetToken.email,
      passwordResetToken.token
    );

    return { success: "Reset link sent to your email!" };
  } catch (error) {
    console.error("FORGOT_PASSWORD_ERROR", error);
    return { error: "Something went wrong!" };
  }
}; 