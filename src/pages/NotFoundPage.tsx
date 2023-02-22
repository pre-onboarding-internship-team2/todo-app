import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section className="hero min-h-screen">
      <article className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops...</h1>
          <p className="py-6">Something's Wrong!</p>
          <Link to="/signin">
            <button className="btn btn-primary rounded-full text-white">
              돌아가기
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
};
