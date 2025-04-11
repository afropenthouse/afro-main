import nodemailer from "nodemailer";
// import * as handlebars from "handlebars";
// import { welcomeTemplate } from "./templates/welcome";

export async function sendVerificationMail(email, token) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  const emailTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email - mendAfrica</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #EBCC48;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 10px 10px;
            background-color: #ffffff;
        }
        .header {
            text-align: center;
            padding: 15px 0;
            background-color: #f7cb08;
            color: #333333;
        }
        .verification-message {
            font-size: 24px;
            text-align: center;
            color: #EBCC48;
            padding: 10px 0;
        }
        .content {
            line-height: 1.6;
            color: #333333;
            padding: 20px;
        }
        .verification-box {
            background-color: #f9f6e5;
            border-left: 4px solid #EBCC48;
            margin: 20px 0;
            padding: 15px;
            text-align: center;
        }
        .verification-code {
            font-size: 32px;
            letter-spacing: 5px;
            color: #333333;
            font-weight: bold;
            margin: 15px 0;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #EBCC48;
            color: #333333;
            text-decoration: none;
            border-radius: 4px;
            margin: 20px 0;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            color: #666666;
            font-size: 12px;
        }
        .note {
            font-size: 14px;
            color: #666666;
            font-style: italic;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to mendAfrica!</h1>
        </div>
        
        <div class="content">
            <p class="verification-message">Verify Your Email Address</p>
            
            <p>Thank you for joining mendAfrica. We're excited to have you as part of our community dedicated to creating positive change in Africa.</p>

            <div class="verification-box">
                <p>Your verification code is:</p>
                <div class="verification-code">${token}</div>
                <p>Enter this code on the verification page to complete your registration.</p>
            </div>

            <center>
                <a href="https://mendafrica.vercel.app/auth/new-verification?token=${token}" class="button">
                    Verify Email Address
                </a>
            </center>

            <p class="note">This verification code will expire in 24 hours. If you didn't create an account with mendAfrica, please ignore this email.</p>

            <p>Best regards,<br>
            The mendAfrica Team</p>
        </div>
        
        <div class="footer">
            <p>© 2025 mendAfrica. All rights reserved.</p>
            <p>Need help? <a href="[Support_URL]">Contact our support team</a></p>
            <p><a href="[Privacy_Policy]">Privacy Policy</a> | <a href="[Terms_URL]">Terms of Service</a></p>
        </div>
    </div>
</body>
</html>`;

  try {
    const testResult = await transport.verify();
    console.log('SMTP Connection verified:', testResult);
  } catch (error) {
    console.error('SMTP Connection failed:', error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "Verify Your Email Address - mendAfrica 🌍",
      html: emailTemplate,
    });
    console.log('Email sent successfully:', sendResult);
    return sendResult;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
export async function sendPasswordResetMail(email, token) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password?token=${token}`;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  const emailTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password - mendAfrica</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #EBCC48;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 10px 10px;
            background-color: #ffffff;
        }
        .header {
            text-align: center;
            padding: 15px 0;
            background-color: #f7cb08;
            color: #333333;
        }
        .reset-message {
            font-size: 24px;
            text-align: center;
            color: #EBCC48;
            padding: 10px 0;
        }
        .content {
            line-height: 1.6;
            color: #333333;
            padding: 20px;
        }
        .security-box {
            background-color: #f9f6e5;
            border-left: 4px solid #EBCC48;
            margin: 20px 0;
            padding: 15px;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #EBCC48;
            color: #333333;
            text-decoration: none;
            border-radius: 4px;
            margin: 20px 0;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            color: #666666;
            font-size: 12px;
        }
        .warning {
            color: #666666;
            font-style: italic;
            margin-top: 15px;
            font-size: 14px;
        }
        .reset-link {
            word-break: break-all;
            color: #EBCC48;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Request</h1>
        </div>
        
        <div class="content">
            <p class="reset-message">Reset Your Password</p>
            
            <p>We received a request to reset the password for your mendAfrica account. Click the button below to create a new password:</p>

            <div class="security-box">
                <p><strong>Security Notice:</strong></p>
                <ul>
                    <li>This link will expire in 1 hour</li>
                    <li>If you didn't request this change, please secure your account</li>
                </ul>
            </div>

            <center>
                <a href="${resetLink}" class="button">Reset Password</a>
            </center>

            <p class="warning">If the button doesn't work, copy and paste this link into your browser:</p>
            <p class="reset-link">${resetLink}</p>

            <p><strong>Important:</strong> If you didn't request a password reset, please ignore this email or contact our support team if you have concerns about your account security.</p>

            <p>Best regards,<br>
            The mendAfrica Team</p>
        </div>
        
        <div class="footer">
            <p>© 2025 mendAfrica. All rights reserved.</p>
            <p>Need help? <a href="[Support_URL]">Contact our support team</a></p>
            <p><a href="[Privacy_Policy]">Privacy Policy</a> | <a href="[Terms_URL]">Terms of Service</a></p>
            <p>This is an automated message, please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>`;

  try {
    const testResult = await transport.verify();
    console.log('SMTP Connection verified:', testResult);
  } catch (error) {
    console.error('SMTP Connection failed:', error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "Reset Your Password - mendAfrica 🌍",
      html: emailTemplate,
    });
    console.log('Email sent successfully:', sendResult);
    return sendResult;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

export async function sendTwoFactorTokenMail(email, token) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  console.log(email, token);
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "reset your password",
      html: `<p>Your 2FA code
       ${token}</p>`,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}


export async function sendThankyouEmail(firstName, name, email, donationAmount, projectName, currency) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  const emailTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Impact - mendAfrica</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #EBCC48;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 10px 10px;
            background-color: #ffffff;
        }
        .header {
            text-align: center;
            padding: 15px 0;
            background-color: #f7cb08;
            color: #333333;
        }
        .impact-message {
            font-size: 24px;
            text-align: center;
            color: #EBCC48;
            padding: 10px 0;
        }
        .content {
            line-height: 1.6;
            color: #333333;
        }
        .highlight-box {
            background-color: #f9f6e5;
            border-left: 4px solid #EBCC48;
            margin: 20px 0;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #EBCC48;
            color: #333333;
            text-decoration: none;
            border-radius: 4px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            color: #666666;
            font-size: 12px;
        }
        .social-links {
            margin: 20px 0;
            text-align: center;
        }
        .social-links a {
            margin: 0 10px;
            color: #EBCC48;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You, ${firstName || name}!</h1>
        </div>
        
        <div class="content">
            <p class="impact-message">Your Generosity is Changing Lives in Africa</p>
            
            <div class="highlight-box">
                <p>We recieved your donation of ${currency} ${donationAmount},Your contribution to <strong>${projectName}</strong> is making a real difference. We're honored to have you as part of our community of change-makers.</p>
            </div>

            <p>Dear ${firstName || name},</p>
            
            <p>Thank you for your generous donation to mendAfrica. Your support is a powerful statement of your commitment to creating positive change in Africa. We're deeply grateful for your trust in our mission.</p>

            <p>Click below to track your givings</p>
           
            <center>
                <a href="https://mendafrica.vercel.app/my-givings" class="button">Track Your Impact</a>
            </center>

            <p>We'll keep you updated on how your donation is making a difference. You're now part of a community that's actively shaping a better future for Africa.</p>

            <div class="social-links">
                Share your impact:
                <a href="[Twitter_Share_URL]">Twitter</a> |
                <a href="[Facebook_Share_URL]">Facebook</a> |
            </div>

            <p>With heartfelt gratitude,<br>
            The mendAfrica Team</p>
        </div>
        
        <div class="footer">
            <p>© 2025 mendAfrica. All rights reserved.</p>
            <p>Want to do more? <a href="[Donation_Page_URL]">View more projects</a></p>
            <p><a href="[Unsubscribe_Link]">Update email preferences</a> | <a href="[Privacy_Policy]">Privacy Policy</a></p>
        </div>
    </div>
</body>
</html>`;

  try {
    const testResult = await transport.verify();
    console.log('SMTP Connection verified:', testResult);
  } catch (error) {
    console.error('SMTP Connection failed:', error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "Thank You for Impacting Africa! 🌍",
      html: emailTemplate,
    });
    console.log('Email sent successfully:', sendResult);
    return sendResult;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

export async function sendGoalReachedEmail(email, userGoal, firstName, name, goalReached) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const remainingGoal = userGoal - goalReached;
  const progressPercentage = (goalReached / userGoal) * 100;
  
  const emailTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're ${remainingGoal} Lives Away from Your Monthly Goal!</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #EBCC48;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
        }
        .header {
            text-align: center;
            padding: 20px 0;
            background-color: #f7cb08;
            color: #333333;
        }
        .progress-bar {
            width: 100%;
            height: 30px;
            background-color: #000000;
            border-radius: 15px;
            overflow: hidden;
            margin: 20px 0;
        }
        .progress-fill {
            height: 100%;
            background-color: #EBCC48;
            width: ${progressPercentage}%;
            transition: width 0.5s ease-in-out;
        }
        .progress-text {
            text-align: center;
            font-size: 18px;
            margin: 10px 0;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #EBCC48;
            color: #333333;
            text-decoration: none;
            border-radius: 4px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            color: #666666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Keep Going! You're Making an Impact!</h1>
        </div>
        
        <div class="content">
            <p>Hi ${firstName || name},</p>
            
            <p>Thank you for your recent generosity! Your contribution is making a real difference in the lives of those who need it most.</p>

            <p>So far, you've impacted ${goalReached} lives this month—just ${remainingGoal} more to reach your goal of ${userGoal} lives impacted! 🎯</p>

            <p>Every effort counts, and you're helping to create a better future for individuals and communities across Africa.</p>

            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <div class="progress-text">
                ${goalReached}/${userGoal} Lives Impacted
            </div>

            <p>Would you like to go the extra mile and reach your goal?</p>
           
            <center>
                <a href="https://mendafrica.vercel.app/donate" class="button">Donate Now</a>
            </center>

            <p>Together, we're changing lives. Thank you for being a valued part of the MendAfrica community!</p>

            <p>Warm regards,<br>
            The MendAfrica Team</p>
        </div>
        
        <div class="footer">
            <p>Want to know how your donations are making an impact? <a href="https://mendafrica.vercel.app/success-stories">Read the latest success stories here</a>.</p>
            <p>© 2025 mendAfrica. All rights reserved.</p>
            <p><a href="[Unsubscribe_Link]">Update email preferences</a> | <a href="[Privacy_Policy]">Privacy Policy</a></p>
        </div>
    </div>
</body>
</html>`;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log('SMTP Connection verified:', testResult);
  } catch (error) {
    console.error('SMTP Connection failed:', error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: `You're ${remainingGoal} Lives Away from Your Monthly Goal!`,
      html: emailTemplate,
    });
    console.log('Email sent successfully:', sendResult);
    return sendResult;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}


export async function sendGoalCompletedEmail(email, firstName, name, goalReached) { 
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  
  const emailTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You Did It! 🎉 Your Goal is Achieved!</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #EBCC48;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
        }
        .header {
            text-align: center;
            padding: 20px 0;
            background-color: #f7cb08;
            color: #333333;
        }
        .achievement-box {
            background-color: #f9f6e5;
            border: 2px solid #EBCC48;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #EBCC48;
            color: #333333;
            text-decoration: none;
            border-radius: 4px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            color: #666666;
            font-size: 12px;
        }
        .celebration {
            font-size: 24px;
            text-align: center;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Congratulations on Reaching Your Goal! 🎉</h1>
        </div>
        
        <div class="content">
            <p>Hi ${firstName || name},</p>
            
            <p class="celebration">Amazing news—you've reached your monthly goal of impacting ${goalReached} lives! 🎯</p>

            <p>Your kindness and generosity are truly inspiring, and you've made a significant difference in the lives of those who need it most. Because of your contributions, families and individuals now have hope for a better future.</p>

            <div class="achievement-box">
                ${goalReached}/${goalReached} Lives Impacted ✅
            </div>

            <p>But the journey doesn't have to stop here! You can set a new goal or continue giving to create even more impact.</p>
           
            <center>
                <a href="https://mendafrica.vercel.app/set-goal" class="button">Set a New Goal</a>
            </center>

            <p>Thank you for being a part of the MendAfrica family. Together, we're transforming lives and building brighter tomorrows.</p>

            <p>With gratitude,<br>
            The MendAfrica Team</p>
        </div>
        
        <div class="footer">
            <p><a href="https://mendafrica.vercel.app/success-stories">Read stories of lives changed thanks to your generosity here</a>.</p>
            <p>Feel free to share your success with your friends to inspire them!</p>
            <p>© 2025 mendAfrica. All rights reserved.</p>
            <p><a href="[Privacy_Policy]">Privacy Policy</a></p>
        </div>
    </div>
</body>
</html>`;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log('SMTP Connection verified:', testResult);
  } catch (error) {
    console.error('SMTP Connection failed:', error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "You Did It! 🎉 Your Goal is Achieved!",
      html: emailTemplate,
    });
    console.log('Email sent successfully:', sendResult);
    return sendResult;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

export async function sendGoalMissedEmail(email, firstName, name, targetLives, achievedLives) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const remainingLives = targetLives - achievedLives;

  const emailTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>We're Sorry You Missed Your Goal</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #F8D7DA;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
        }
        .header {
            text-align: center;
            padding: 20px 0;
            background-color: #F5C6CB;
            color: #721C24;
        }
        .summary-box {
            background-color: #FDECEA;
            border: 2px solid #F8D7DA;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #F5C6CB;
            color: #721C24;
            text-decoration: none;
            border-radius: 4px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            color: #666666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Don't Worry, You Made a Difference!</h1>
        </div>
        
        <div class="content">
            <p>Hi ${firstName || name},</p>
            
            <p>While you didn’t quite reach your goal of impacting ${targetLives} lives this time, your incredible generosity still touched ${achievedLives} lives! ❤️</p>

            <div class="summary-box">
                ${achievedLives}/${targetLives} Lives Impacted
            </div>

            <p>Every single life you impact is a step toward a brighter future, and we deeply appreciate your efforts.</p>

            <p>If you're ready to try again or set a new goal, we're here to support you every step of the way!</p>
           
            <center>
                <a href="https://mendafrica.vercel.app/set-goal" class="button">Set a New Goal</a>
            </center>

            <p>Thank you for being a valued part of the MendAfrica community. Together, we can continue making a difference.</p>

            <p>With gratitude,<br>
            The MendAfrica Team</p>
        </div>
        
        <div class="footer">
            <p><a href="https://mendafrica.vercel.app/success-stories">Read inspiring stories of lives you've helped transform here</a>.</p>
            <p>© 2025 mendAfrica. All rights reserved.</p>
            <p><a href="[Privacy_Policy]">Privacy Policy</a></p>
        </div>
    </div>
</body>
</html>`;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log('SMTP Connection verified:', testResult);
  } catch (error) {
    console.error('SMTP Connection failed:', error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "We're Sorry You Missed Your Goal",
      html: emailTemplate,
    });
    console.log('Email sent successfully:', sendResult);
    return sendResult;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}


