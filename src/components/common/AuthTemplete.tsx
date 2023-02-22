import { Link } from "react-router-dom";

export const AuthTemplete = ({
  handleFunc,
  bool,
  path,
}: {
  handleFunc: React.ChangeEventHandler<HTMLInputElement>;
  bool: boolean;
  path: string;
}) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-2 text-3xl font-bold">투두리스트</h1>
      <form className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">이메일</span>
        </label>
        <input
          type="email"
          name="email"
          onChange={handleFunc}
          placeholder="이메일을 입력해주세요"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">비밀번호</span>
        </label>
        <input
          type="password"
          name="password"
          onChange={handleFunc}
          placeholder="비밀번호를 입력해주세요"
          className="input input-bordered w-full max-w-xs"
        />
        {path === "/signin" ? (
          <div className="flex justify-between mt-6">
            <Link to="/signup" className="self-end link link-primary">
              아직 회원이 아니신가요?
            </Link>
            <button
              disabled={!bool}
              className="w-24 btn btn-primary rounded-full text-white"
            >
              로그인
            </button>
          </div>
        ) : (
          <div className="flex justify-end mt-6">
            <button
              disabled={!bool}
              className="w-24 btn btn-primary rounded-full text-white"
            >
              가입하기
            </button>
          </div>
        )}
      </form>
    </section>
  );
};
