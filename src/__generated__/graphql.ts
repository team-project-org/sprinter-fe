/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Long: { input: any; output: any; }
};

export enum AffiliationType {
  /**  회사  */
  Company = 'COMPANY',
  /**  고등학교  */
  HighSchool = 'HIGH_SCHOOL',
  /**  없음  */
  None = 'NONE',
  /**  대학교  */
  University = 'UNIVERSITY'
}

export type CreatePostInput = {
  /**  포스트 종료  */
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  /**  회원 USERNAME  */
  owner_username: Scalars['String']['input'];
  /**  포스트 시작  */
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  /**  포스트 제목  */
  title: Scalars['String']['input'];
};

export type CreateProfileInput = {
  /**  소속 기관 명  */
  affiliation: Scalars['String']['input'];
  /**  소속 기관 종류  */
  affiliation_type: AffiliationType;
  /**  자기소개  */
  introduction: Scalars['String']['input'];
  /**  직무  */
  job: Job;
  /**  직군  */
  job_group: JobGroup;
  /**  경력  */
  job_level: JobLevel;
  /**  기술 스택  */
  job_skills: Array<JobSkill>;
  /**  기타 경험  */
  other_experiences: Array<OtherExperienceInput>;
  /**  포트폴리오 파일 업로드 URL  */
  portfolio_file_url?: InputMaybe<Scalars['String']['input']>;
  /**  포트폴리오 링크  */
  portfolio_link?: InputMaybe<Scalars['String']['input']>;
  /**  대표 이미지 업로드 URL  */
  profile_image_url?: InputMaybe<Scalars['String']['input']>;
  /**  프로젝트 경험  */
  project_experiences: Array<ProjectExperienceInput>;
  /**  경력  */
  work_experiences: Array<WorkExperienceInput>;
};

export enum Job {
  /**  안드로이드 개발자  */
  AndroidDeveloper = 'ANDROID_DEVELOPER',
  /**  벡엔드/서버 개발자  */
  BackendDeveloper = 'BACKEND_DEVELOPER',
  /**  사업개발 기획자  */
  BusinessDevelopmentPlanner = 'BUSINESS_DEVELOPMENT_PLANNER',
  /**  프론트엔드/웹퍼블리셔 개발자  */
  FrontendDeveloper = 'FRONTEND_DEVELOPER',
  /**  게임 클라이언트 개발자  */
  GameClientDeveloper = 'GAME_CLIENT_DEVELOPER',
  /**  "게임 기획자")  */
  GameProductOwner = 'GAME_PRODUCT_OWNER',
  /**  게임 서버 개발자  */
  GameServerDeveloper = 'GAME_SERVER_DEVELOPER',
  /**  "그래픽 디자이너")  */
  GraphicsDesigner = 'GRAPHICS_DESIGNER',
  /**  "IOS 개발자")  */
  IosDeveloper = 'IOS_DEVELOPER',
  /**  PO/PM  */
  PoPm = 'PO_PM',
  /**  프로덕트 디자이너  */
  ProductDesigner = 'PRODUCT_DESIGNER',
  /**  서비스 기획자  */
  ServiceOwner = 'SERVICE_OWNER',
  /**  웹/앱 디자이너  */
  WebAppDesigner = 'WEB_APP_DESIGNER'
}

export enum JobGroup {
  /**  디자인  */
  Design = 'DESIGN',
  /**  개발  */
  Developer = 'DEVELOPER',
  /**  게임개발  */
  GameDeveloper = 'GAME_DEVELOPER',
  /**  기획  */
  Product = 'PRODUCT'
}

export enum JobLevel {
  /**  신입  */
  Beginner = 'BEGINNER',
  /**  인턴  */
  Intern = 'INTERN',
  /**  경력 무관  */
  Irrelevant = 'IRRELEVANT',
  /**  1~3년  */
  Junior = 'JUNIOR',
  /**  4~8년  */
  Middle = 'MIDDLE',
  /**  9년 이상  */
  Senior = 'SENIOR',
  /**  학생  */
  Student = 'STUDENT',
  /**  리더  */
  Top = 'TOP'
}

export enum JobSkill {
  /**  AWS  */
  Aws = 'AWS',
  /**  Docker  */
  Docker = 'Docker',
  /**  Figma  */
  Figma = 'Figma',
  /**  Git  */
  Git = 'Git',
  /**  Github  */
  Github = 'Github',
  /**  Google Analytics  */
  GoogleAnalytics = 'GoogleAnalytics',
  /**  HTML/CSS  */
  HtmlCss = 'HtmlCss',
  /**  Illustrator  */
  Illustrator = 'Illustrator',
  /**  Java  */
  Java = 'Java',
  /**  JavaScript  */
  JavaScript = 'JavaScript',
  /**  Kotlin  */
  Kotlin = 'Kotlin',
  /**  MS-Office  */
  MsOffice = 'MSOffice',
  /**  MySQL  */
  MySql = 'MySQL',
  /**  Node.js  */
  NodeJs = 'NodeJs',
  /**  Photoshop  */
  Photoshop = 'Photoshop',
  /**  Python  */
  Python = 'Python',
  /**  React  */
  React = 'React',
  /**  React Native  */
  ReactNative = 'ReactNative',
  /**  SQL  */
  Sql = 'SQL',
  /**  Spring  */
  Spring = 'Spring',
  /**  TypeScript  */
  TypeScript = 'TypeScript'
}

export type LoginInput = {
  /**  회원 PASSWORD  */
  password: Scalars['String']['input'];
  /**  회원 USERNAME  */
  username: Scalars['String']['input'];
};

export type MemberList = {
  __typename?: 'MemberList';
  item_list: Array<MemberResponse>;
  total_count: Scalars['Int']['output'];
};

export type MemberResponse = {
  __typename?: 'MemberResponse';
  /**  회원 ID  */
  id: Scalars['ID']['output'];
  /**  프로필 이름  */
  profile_name: Scalars['String']['output'];
  /**  회원 권한  */
  role_type_list: Array<RoleType>;
  /**  회원 고유 이름  */
  username: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  회원 생성  */
  createMember: Scalars['ID']['output'];
  /**  프로필 생성 (성공 시 회원 아이디 반환)  */
  createMemberProfile: Scalars['ID']['output'];
  /**  포스트 생성  */
  createPost: Scalars['ID']['output'];
  /**  회원 프로필 네임 수정  */
  updateProfileName: Scalars['ID']['output'];
};


export type MutationCreateMemberArgs = {
  input: SignupInput;
};


export type MutationCreateMemberProfileArgs = {
  input: CreateProfileInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationUpdateProfileNameArgs = {
  input: UpdateProfileNameInput;
};

export type OtherExperienceInput = {
  /**  활동명  */
  activity_name: Scalars['String']['input'];
  /**  종료 날짜  */
  end_date: Scalars['DateTime']['input'];
  /**  역할  */
  role: Scalars['String']['input'];
  /**  시작 날짜  */
  start_date: Scalars['DateTime']['input'];
};

export type OtherExperienceResponse = {
  __typename?: 'OtherExperienceResponse';
  /**  활동명  */
  activity_name: Scalars['String']['output'];
  /**  종료 날짜  */
  end_date: Scalars['DateTime']['output'];
  /**  역할  */
  role: Scalars['String']['output'];
  /**  시작 날짜  */
  start_date: Scalars['DateTime']['output'];
};

export type PostList = {
  __typename?: 'PostList';
  item_list: Array<PostResponse>;
  total_count: Scalars['Int']['output'];
};

export type PostResponse = {
  __typename?: 'PostResponse';
  /**  포스트 종료일  */
  end_date?: Maybe<Scalars['DateTime']['output']>;
  /**  포스트 ID  */
  id: Scalars['ID']['output'];
  /**  포스트 주인  */
  owner?: Maybe<MemberResponse>;
  /**  포스트 시작일  */
  start_date?: Maybe<Scalars['DateTime']['output']>;
  /**  포스트 제목  */
  title: Scalars['String']['output'];
};

export type ProfileResponse = {
  __typename?: 'ProfileResponse';
  /**  소속 기관 명  */
  affiliation: Scalars['String']['output'];
  /**  소속 기관 종류  */
  affiliation_type: AffiliationType;
  /**  프로필 ID  */
  id: Scalars['ID']['output'];
  /**  자기소개  */
  introduction: Scalars['String']['output'];
  /**  직무  */
  job: Job;
  /**  직군  */
  job_group: JobGroup;
  /**  경력  */
  job_level: JobLevel;
  /**  기술 스택  */
  job_skills: Array<JobSkill>;
  /**  회원 ID  */
  member_id: Scalars['ID']['output'];
  /**  기타 경험  */
  other_experiences: Array<OtherExperienceResponse>;
  /**  포트폴리오 파일 업로드 URL  */
  portfolio_file_url?: Maybe<Scalars['String']['output']>;
  /**  포트폴리오 링크  */
  portfolio_link?: Maybe<Scalars['String']['output']>;
  /**  대표 이미지 업로드 URL  */
  profile_image_url?: Maybe<Scalars['String']['output']>;
  /**  프로젝트 경험  */
  project_experiences: Array<ProjectExperienceResponse>;
  /**  경력  */
  work_experiences: Array<WorkExperienceResponse>;
};

export type ProjectExperienceInput = {
  /**  프로젝트 종료 날짜  */
  end_date: Scalars['DateTime']['input'];
  /**  직무  */
  job: Job;
  /**  직군  */
  job_group: JobGroup;
  /**  프로젝트 명  */
  project_name: Scalars['String']['input'];
  /**  프로젝트 시작 날짜  */
  start_date: Scalars['DateTime']['input'];
};

export type ProjectExperienceResponse = {
  __typename?: 'ProjectExperienceResponse';
  /**  프로젝트 종료 날짜  */
  end_date: Scalars['DateTime']['output'];
  /**  직무  */
  job: Job;
  /**  직군  */
  job_group: JobGroup;
  /**  프로젝트 명  */
  project_name: Scalars['String']['output'];
  /**  프로젝트 시작 날짜  */
  start_date: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  /**  회원 전체 조회  */
  getAllMemberList: MemberList;
  /**  포스트 전체 조회  */
  getAllPostList: PostList;
  /**  회원 자신을 조회  */
  getMe: MemberResponse;
  /**  특정 회원을 조회  */
  getMember: MemberResponse;
  /**  회원 조회  */
  getMemberAdmin: MemberResponse;
  /**  특정 회원이 작성한 포스트 전체 조회  */
  getMemberPostList: PostList;
  /**  회원 자신이 작성한 포스트 전체 조회  */
  getMyPostList: PostList;
  /**  프로필 자신을 조회  */
  getMyProfile: ProfileResponse;
  getQueryAdminAuth: Scalars['Boolean']['output'];
  getQueryAnonymous2Auth: Scalars['Boolean']['output'];
  getQueryAnonymousAuth: Scalars['Boolean']['output'];
  getQueryUserAuth: Scalars['Boolean']['output'];
};


export type QueryGetMemberArgs = {
  member_id: Scalars['ID']['input'];
};


export type QueryGetMemberAdminArgs = {
  member_id: Scalars['ID']['input'];
};


export type QueryGetMemberPostListArgs = {
  member_id: Scalars['ID']['input'];
};

export enum RoleType {
  RoleAdmin = 'ROLE_ADMIN',
  RoleUser = 'ROLE_USER'
}

export type SignupInput = {
  /**  회원 패스워드  */
  password: Scalars['String']['input'];
  /**  회원 프로필 네임  */
  profile_name: Scalars['String']['input'];
  /**  회원 고유 USERNAME  */
  username: Scalars['String']['input'];
};

export enum TagType {
  /**  직무 스킬 키워드  */
  JobSkillKeyword = 'JOB_SKILL_KEYWORD'
}

export type UpdateProfileNameInput = {
  /**  회원 ID  */
  id: Scalars['ID']['input'];
  /**  갱신할 새 프로필 네임  */
  new_profile_name: Scalars['String']['input'];
};

export type WorkExperienceInput = {
  /**  회사 명  */
  company: Scalars['String']['input'];
  /**  경력 종료 날짜  */
  end_date: Scalars['DateTime']['input'];
  /**  직무  */
  job: Job;
  /**  직군  */
  job_group: JobGroup;
  /**  경력 시작 날짜  */
  start_date: Scalars['DateTime']['input'];
};

export type WorkExperienceResponse = {
  __typename?: 'WorkExperienceResponse';
  /**  회사 명  */
  company: Scalars['String']['output'];
  /**  경력 종료 날짜  */
  end_date: Scalars['DateTime']['output'];
  /**  직무  */
  job: Job;
  /**  직군  */
  job_group: JobGroup;
  /**  경력 시작 날짜  */
  start_date: Scalars['DateTime']['output'];
};
