"use server";

import db from "@/lib/db";
import bcrypt from "bcryptjs";

export const resetPassword = async (token, password) => {
  try {
    const resetToken = await db.passwordResetToken.findUnique({
      where: { token }
    });

    if (!resetToken) {
      return { error: "Invalid token!" };
    }

    if (resetToken.expires < new Date()) {
      return { error: "Token has expired!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
      where: { email: resetToken.email },
      data: { password: hashedPassword }
    });

    await db.passwordResetToken.delete({
      where: { id: resetToken.id }
    });

    return { success: "Password updated successfully!" };
  } catch (error) {
    console.error("RESET_PASSWORD_ERROR", error);
    return { error: "Something went wrong!" };
  }
}; 