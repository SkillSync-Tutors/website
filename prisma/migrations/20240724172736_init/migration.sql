-- CreateTable
CREATE TABLE "Tutor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rate" REAL NOT NULL,
    "commission" REAL NOT NULL,
    "school" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "join_date" DATETIME NOT NULL,
    "balance" REAL NOT NULL DEFAULT 0.0,
    "bio" TEXT NOT NULL,
    "hours_taught" REAL NOT NULL,
    "last_login" DATETIME NOT NULL,
    "profile_picture" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "student_id" INTEGER NOT NULL,
    "tutor_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    CONSTRAINT "Review_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_tutor_id_fkey" FOREIGN KEY ("tutor_id") REFERENCES "Tutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "join_date" DATETIME NOT NULL,
    "parent_id" INTEGER NOT NULL,
    "balance" REAL NOT NULL DEFAULT 0.0,
    "last_login" DATETIME NOT NULL,
    "profile_picture" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    CONSTRAINT "Student_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Parent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Parent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "balance" REAL NOT NULL DEFAULT 0.0,
    "last_login" DATETIME NOT NULL,
    "active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "TutorStudent" (
    "student_id" INTEGER NOT NULL,
    "tutor_id" INTEGER NOT NULL,

    PRIMARY KEY ("student_id", "tutor_id"),
    CONSTRAINT "TutorStudent_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TutorStudent_tutor_id_fkey" FOREIGN KEY ("tutor_id") REFERENCES "Tutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "grade" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "TutorSubject" (
    "tutor_id" INTEGER NOT NULL,
    "subject_id" INTEGER NOT NULL,

    PRIMARY KEY ("tutor_id", "subject_id"),
    CONSTRAINT "TutorSubject_tutor_id_fkey" FOREIGN KEY ("tutor_id") REFERENCES "Tutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TutorSubject_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "Account" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sessionToken" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");
