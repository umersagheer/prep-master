export const paths = {
  home: "/",
  auth: {
    signIn: "/auth/sign-in",
  },
  dashboard: {
    overview: "/dashboard",
  },
  tests: {
    list: "/tests/:testSeriesId",
    description: "/tests/:testSeriesId/:testId",
    attempt: "/tests/:testSeriesId/:testId/attempt",
  },
} as const;
