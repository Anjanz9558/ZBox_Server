module.exports = {
    InternalServerError: { code: 1001, message: "Something went wrong!" },
    onlyAdminCanLogin: { code: 1001, message: "Only Admin Can login on this portal!" },
    UserRegistrationSuccess: { code: 200, message: "Register Successfully." },
    EmailVerified: { code: 200, message: "your email is not verified please verified your email" },
    OTPVerifyFail: {
        code: 1010,
        message: "OTP verification failed."
    },
    OTPExpired: {
        code: 1010,
        message: "OTP is expire."
    },

    NoAssetsForAnyUserFound: { code: 1010, message: "No Project Assets For Any User" },
    NoRequestFound: { code: 1010, message: "No request found" },
    mobileExist: { code: 1010, message: "Mobile number already exist." },
    mobileAllReadyUpdated: { code: 1010, message: "Mobile number already updated." },
    UserNameAvailable: { code: 200, message: "User Name Available" },
    UserNameNotAvailable: { code: 1010, message: "User Name Is Already Taken" },
    userDataInsertSuccess: { code: 200, message: "Insert Data Successfully" },
    UserUpdateSucess: { code: 200, message: "Updated Successfully" },
    UserEmailVerifySucess: { code: 200, message: "your email vereify  Successfully" },
    seshUpdateSucess: { code: 200, message: "sesh status Updated Successfully" },
    ratingUpdateSucess: { code: 200, message: "Rating Updated Successfully" },

    UserUpdateFail: { code: 1010, message: "Failed to update user details. Please try after sometime. " },
    SendOTPError: { code: 1010, message: "OTP Not Send" },
    ForgotPassword: { code: 200, message: "OTP Send to your registerd Email ID." },
    mobileNotFound: { code: 1010, message: "User is not added mobile number." },
    PasswordChangeSucess: { code: 200, message: "Password has been updated" },
    profileHeaderSize: { code: 1010, message: "Profile Header is max 40 character." },
    bioSize: { code: 1010, message: "Profile Header is max 160 character." },
    emailNotUpdateSocialUser: { code: 1010, message: "Email is not updated for social user." },
    roleTypetInsertFail: {
        code: 1005,
        message: "Failed to insert role Details. Please try after sometime."
    },
    menuInsertFail: {
        code: 1005,
        message: "Failed to insert menu Details. Please try after sometime."
    },
    roleTypeAllreadyExist: {
        code: 1005,
        message: "role is already exist."
    },
    menuAllreadyExist: {
        code: 1005,
        message: "menu is already exist."
    },
    menuDataInsertSuccess: {
        code: 200,
        message: "role Data Save Successfully"
    },
    roleDataInsertSuccess: {
        code: 200,
        message: "role Data Save Successfully"
    },

    UserUpdateFailed: {
        code: 1005,
        message: "Failed to update user details. Please try after sometime."
    },
    RatingUpdateFailed: {
        code: 1005,
        message: "Failed to update user ratings. Please try after sometime."
    },
    UserseshstatusFailed: {
        code: 1005,
        message: "Failed to update sesh status . Please try after sometime."
    },

    RoleUpdateFail: {
        code: 1005,
        message: "Failed to update Role Details. Please try after sometime."
    },
    MenuUpdateFail: {
        code: 1005,
        message: "Failed to update menu Details. Please try after sometime."
    },
    userstatusupdatefail: {
        code: 1005,
        message: "Failed to update user status . Please try after sometime."
    },
    RoleAllreadyExist: {
        code: 1005,
        message: "Role is already exist."
    },
    AllreadyExist: {
        code: 1005,
        message: "Already Exist."
    },
    empResumeInfoAllreadyExist: {
        code: 1005,
        message: " Emp Resume Info Already Exist."
    },
    AllreadyAppliedShortLeave: {
        code: 1005,
        message: "Already applied for this date."
    },
    AllreadyCheckOut: {
        code: 1005,
        message: "Already CheckOut."
    },
    pleasePreviousCheckOut: {
        code: 420,
        message: "please Previous CheckOut."
    },
    pleasePreviousAutoCheckOut: {
        code: 420,
        message: "please Previous Auto CheckOut."
    },
    pleasePreviousManualCheckOut: {
        code: 420,
        message: "please Previous Manual CheckOut."
    },
    enterdetails: {
        code: 1005,
        message: "please pass require details"
    },
    pleaseCheckIn: {
        code: 1005,
        message: "please checkIn."
    },
    yourAssetRequestExist: {
        code: 1005,
        message: "Your asset request Already exists"
    },

    yourAssetIssueExist: {
        code: 1005,
        message: "Your asset issue is  Already report"
    },

    daystarted: {
        code: 1005,
        message: "your today's attendance not fill"
    },
    breakstarted: {
        code: 1005,
        message: "your break is already started"
    },
    breaknotstarted: {
        code: 1005,
        message: "your break is not started"
    },
    emailAllreadyExist: {
        code: 1005,
        message: "Email Already Exist."
    },
    ModuleInsertFail: {
        code: 1005,
        message: "Failed to insert Module Details. Please try after sometime."
    },
    ModuleAllreadyExist: {
        code: 1005,
        message: "Module is already exist."
    },
    notableToAttendancefill: {
        code: 1005,
        message: "Date is not valid"
    },

    NoRoleFound: { code: 1010, message: "No role found" },

    NoUserFound: { code: 1006, message: "No user found." },
    NoTemplateDataFound: { code: 1006, message: "No Template Data found." },
    NoSeshtypeFound: { code: 1006, message: "No seshType found." },
    NoSeshsionsFound: { code: 1006, message: "No seshsions found." },
    NoSeshsionsRequestFound: { code: 1006, message: "No seshsions request found." },
    InvalidCredential: { code: 1007, message: "Invalid username or password." },
    InvalidPassword: { code: 1007, message: "Invalid password Please enter valid password." },
    InvalidDeviceId: { code: 1007, message: "Invalid deviceId Please enter valid deviceId." },
    InvalidDeviceIdOrUser: { code: 1007, message: "Invalid deviceId Or User Please enter valid deviceId Or User." },
    pleaseAddDeviceId: { code: 1007, message: "Please Add DeviseId In this User." },
    pleaseAddDeviceid: { code: 1007, message: "Please Add DeviseId." },
    pleaseGeneratePIN: { code: 1007, message: "Please Generate PIN." },
    InvalidPIN: { code: 1007, message: "Invalid pin Please enter valid pin." },
    InvalidOldPIN: { code: 1007, message: "Invalid Old Pin Please enter valid Old Pin." },
    InvalidEmail: { code: 1007, message: "Invalid Email Please enter valid Email." },
    InvalidOldPassword: { code: 1007, message: "Invalid old password." },
    checkInAfter: { code: 1007, message: "checkIn After 9:30." },
    LoginSuccess: { code: 200, message: "Login successfully." },
    LoginAgain: { code: 200, message: "Please login." },
    PleaseLoginAgain: { code: 1014, message: "Please login." },
    IncorrectPassword: { code: 1014, message: "your password is incorrect please enter correct password." },
    Success: { code: 200, message: "Success." },
    isAdmin: { code: 200, message: "true" },
    isNotAdmin: { code: 200, message: "false" },
    InfoDelete: { code: 200, message: "id deleted sucessfully" },
    Fail: { code: 1010, message: "Fail....." },
    finacialYearIsNotavAilable: { code: 1010, message: "finacialYear is not available" },
    pleaseChangeYourNewPwd: { code: 1010, message: "New Password Is Not Same As Old Password" },
    pleaseBreakEnd: { code: 1010, message: "Please Break End" },
    pleaseChangeYourNewPin: { code: 1010, message: "New Pin Is Not Same As Old Pin" },
    ExistUser: { code: 1011, message: "Mobile number already exist." },
    ExistUserName: { code: 1011, message: "User Name not available." },
    ExistEmail: { code: 1011, message: "Email is already exist." },
    ExistPage: { code: 1011, message: "Page already exist." },
    noMenuDataFound: { code: 1011, message: "No menu Data Found exist." },
    UserAvailableButNotActivated: { code: 1012, message: "User is not activated yet." },
    UserNotActivated: { code: 1012, message: "User is not activated yet." },
    SomethingWrong: { code: 1013, message: "Oops! something went wrong, please try again later." },
    MissingParameter: { code: 1014, message: "Missing parameters." },
    MissingDeviceTokenParameter: { code: 1015, message: "Missing device token parameters." },
    NoBreakDataFound: { code: 1010, message: "No break data found" },
    SubsciptionPlanExist: { code: 1011, message: "SubScription Plan Exist, Deactivate previous plan" },
    templateNameExist: { code: 1011, message: "This template is already exists" },
    currenyNameExist: { code: 1011, message: "This currency is already exists" },
    NoSubscriptionPlanFound: { code: 1010, message: "No subScription plan found" },
    NoSubscriptionFound: { code: 1010, message: "No subScription found" },
    BuddiesRequestAlreadySent: { code: 1010, message: "You have already sent the buddy request to this user" },
    ShehsionsRequestAlreadySent: { code: 1010, message: "sheshion request alreaqdy sent to this user" },
    BuddiesRequestAlreadyGet: { code: 1010, message: "You have already get the buddy request from this user" },
    AlreadyBuddies: { code: 1010, message: "User is Already your buddy" },
    AlreadyAccepted: { code: 1010, message: "seshsions request is Already accepted" },
    CanNotUseFreeSubscriptionMorethenOnce: { code: 1010, message: "You can not use free subscription more then once " },
    NoPostFound: { code: 1010, message: "No post found" },
    NoSalaryDataFound: { code: 1010, message: "No salary data found" },
    NotFound: { code: 1010, message: "No data found" },
    NotEmpFound: { code: 1010, message: "No emp data found" },
    workFromHomeNotApprove: { code: 1010, message: "Your Work From Home Is Not Approve" },
    pendingAttendanceNotFound: { code: 1010, message: "pending Attendance Not Found" },
    NotAssignablePersonFound: { code: 1010, message: "Not Assignable Person Found" },
    notavailable: { code: 1010, message: "your maximum leave limit is reach for leave Apply" },
    leaveisalreadyapply: { code: 1010, message: "your leave is already apply for this date" },
    workFromHomeIsAllReadyApply: { code: 1010, message: "your work from home is already apply for this date" },
    usernotavailable: { code: 1010, message: "This User is not available." },
    DelayCountISMore: { code: 1010, message: "your maximum delay limit is reach for work report" },
    NoCommentFound: { code: 1010, message: "No comment found" },
    NoReplyFound: { code: 1010, message: "No reply found" },
    NoDataFound: { code: 1010, message: "No Data found" },
}
