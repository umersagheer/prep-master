export type UserDTO = {
    id: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    role: Role;
    profilePictureUrl?: string;
    bio?: string;
    createdAt: Date;
    updatedAt: Date;
  
    testSeries: TestSeriesDTO[];
    enrollments: EnrollmentDTO[];
    reviews: ReviewDTO[];
    otps: OTPDTO[];
  };
  
  export type OTPDTO = {
    id: string;
    user: UserDTO;
    userId: string;
    otp: string;
    expiresAt: Date;
    createdAt: Date;
  };
  
  export enum Role {
    STUDENT,
    INSTRUCTOR,
    ADMIN,
  }
  
  export type TestSeriesDTO = {
    id: string;
    title: string;
    description: string;
    price: number;
    language: string;
    createdAt: Date;
    updatedAt: Date;
  
    instructor: UserDTO;
    instructorId: string;
    categories: CategoryDTO[];
    tests: TestDTO[];
    enrollments: EnrollmentDTO[];
    reviews: ReviewDTO[];
  };
  
  export type CategoryDTO = {
    id: string;
    name: string;
    testSeries: TestSeriesDTO[];
  };
  
  export type TestDTO = {
    id: string;
    title: string;
    duration: number;
    testSeries: TestSeriesDTO;
    testSeriesId: string;
    questions: QuestionDTO[];
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type QuestionDTO = {
    id: string;
    text: string;
    options: Record<string, string>;
    correctOption: string;
    test: TestDTO;
    testId: string;
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type EnrollmentDTO = {
    id: string;
    user: UserDTO;
    userId: string;
    testSeries: TestSeriesDTO;
    testSeriesId: string;
    enrolledAt: Date;
  };
  
  export type ReviewDTO = {
    id: string;
    rating: number;
    comment?: string;
    testSeriesId: string;
    testSeries: TestSeriesDTO;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    user: UserDTO;
  };

  export const users: UserDTO[] = [
    {
      id: "1",
      email: "user1@example.com",
      passwordHash: "password1",
      firstName: "John",
      lastName: "Doe",
      role: Role.STUDENT,
      createdAt: new Date(),
      updatedAt: new Date(),
      testSeries: [],
      enrollments: [],
      reviews: [],
      otps: [],
    },
    {
      id: "2",
      email: "user2@example.com",
      passwordHash: "password2",
      firstName: "Jane",
      lastName: "Doe",
      role: Role.INSTRUCTOR,
      createdAt: new Date(),
      updatedAt: new Date(),
      testSeries: [],
      enrollments: [],
      reviews: [],
      otps: [],
    },
    {
      id: "3",
      email: "user3@example.com",
      passwordHash: "password3",
      firstName: "Bob",
      lastName: "Smith",
      role: Role.ADMIN,
      createdAt: new Date(),
      updatedAt: new Date(),
      testSeries: [],
      enrollments: [],
      reviews: [],
      otps: [],
    },
    {
      id: "4",
      email: "user4@example.com",
      passwordHash: "password4",
      firstName: "Alice",
      lastName: "Johnson",
      role: Role.STUDENT,
      createdAt: new Date(),
      updatedAt: new Date(),
      testSeries: [],
      enrollments: [],
      reviews: [],
      otps: [],
    },
    {
      id: "5",
      email: "user5@example.com",
      passwordHash: "password5",
      firstName: "Mike",
      lastName: "Davis",
      role: Role.INSTRUCTOR,
      createdAt: new Date(),
      updatedAt: new Date(),
      testSeries: [],
      enrollments: [],
      reviews: [],
      otps: [],
    },
  ];
  
  export const otps: OTPDTO[] = [
    {
      id: "1",
      user: users[0],
      userId: users[0].id,
      otp: "123456",
      expiresAt: new Date(Date.now() + 30 * 60 * 1000),
      createdAt: new Date(),
    },
    {
      id: "2",
      user: users[1],
      userId: users[1].id,
      otp: "789012",
      expiresAt: new Date(Date.now() + 30 * 60 * 1000),
      createdAt: new Date(),
    },
    {
      id: "3",
      user: users[2],
      userId: users[2].id,
      otp: "345678",
      expiresAt: new Date(Date.now() + 30 * 60 * 1000),
      createdAt: new Date(),
    },
    {
      id: "4",
      user: users[3],
      userId: users[3].id,
      otp: "901234",
      expiresAt: new Date(Date.now() + 30 * 60 * 1000),
      createdAt: new Date(),
    },
    {
      id: "5",
      user: users[4],
      userId: users[4].id,
      otp: "567890",
      expiresAt: new Date(Date.now() + 30 * 60 * 1000),
      createdAt: new Date(),
    },
  ];
  
  export const testSeries: TestSeriesDTO[] = [
    {
      id: "1",
      title: "Math",
      description: "Math test",
      price: 0,
      language: "en",
      createdAt: new Date(),
      updatedAt: new Date(),
      instructor: users[0],
      instructorId: users[0].id,
      categories: [],
      tests: [],
      enrollments: [],
      reviews: [],
    },
    {
      id: "2",
      title: "Science",
      description: "Science test",
      price: 0,
      language: "en",
      createdAt: new Date(),
      updatedAt: new Date(),
      instructor: users[1],
      instructorId: users[1].id,
      categories: [],
      tests: [],
      enrollments: [],
      reviews: [],
    },
    {
      id: "3",
      title: "History",
      description: "History test",
      price: 0,
      language: "en",
      createdAt: new Date(),
      updatedAt: new Date(),
      instructor: users[2],
      instructorId: users[2].id,
      categories: [],
      tests: [],
      enrollments: [],
      reviews: [],
    },
    {
      id: "4",
      title: "English",
      description: "English test",
      price: 0,
      language: "en",
      createdAt: new Date(),
      updatedAt: new Date(),
      instructor: users[3],
      instructorId: users[3].id,
      categories: [],
      tests: [],
      enrollments: [],
      reviews: [],
    },
    {
      id: "5",
      title: "Programming",
      description: "Programming test",
      price: 0,
      language: "en",
      createdAt: new Date(),
      updatedAt: new Date(),
      instructor: users[4],
      instructorId: users[4].id,
      categories: [],
      tests: [],
      enrollments: [],
      reviews: [],
    },
  ];
  
  export const categories: CategoryDTO[] = [
    { id: "1", name: "Math", testSeries: [] },
    { id: "2", name: "Science", testSeries: [] },
    { id: "3", name: "History", testSeries: [] },
    { id: "4", name: "English", testSeries: [] },
    { id: "5", name: "Programming", testSeries: [] },
  ];
  
  export const tests: TestDTO[] = [
    {
      id: "1",
      title: "Test 1",
      duration: 60,
      testSeries: testSeries[0],
      testSeriesId: testSeries[0].id,
      questions: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      title: "Test 2",
      duration: 60,
      testSeries: testSeries[1],
      testSeriesId: testSeries[1].id,
      questions: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      title: "Test 3",
      duration: 60,
      testSeries: testSeries[2],
      testSeriesId: testSeries[2].id,
      questions: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "4",
      title: "Test 4",
      duration: 60,
      testSeries: testSeries[3],
      testSeriesId: testSeries[3].id,
      questions: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "5",
      title: "Test 5",
      duration: 60,
      testSeries: testSeries[4],
      testSeriesId: testSeries[4].id,
      questions: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  
  export const questions: QuestionDTO[] = [
    {
      id: "1",
      text: "What is 2 + 2?",
      options: { a: "2", b: "4", c: "6" },
      correctOption: "b",
      test: tests[0],
      testId: tests[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      text: "What is the capital of France?",
      options: { a: "Berlin", b: "Paris", c: "London" },
      correctOption: "b",
      test: tests[1],
      testId: tests[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      text: "What is the largest planet in our solar system?",
      options: {
        a: "Earth",
        b: "Saturn",
        c: "Jupiter",
      },
      correctOption: "c",
      test: tests[2],
      testId: tests[2].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "4",
      text: "What is the smallest country in the world?",
      options: {
        a: "Vatican City",
        b: "Monaco",
        c: "Nauru",
      },
      correctOption: "a",
      test: tests[3],
      testId: tests[3].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "5",
      text: "What is the largest living species of lizard?",
      options: {
        a: "Saltwater Crocodile",
        b: "Black Caiman",
        c: "Komodo Dragon",
      },
      correctOption: "c",
      test: tests[4],
      testId: tests[4].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  
  export const enrollments: EnrollmentDTO[] = [
    {
      id: "1",
      user: users[0],
      userId: users[0].id,
      testSeries: testSeries[0],
      testSeriesId: testSeries[0].id,
      enrolledAt: new Date(),
    },]