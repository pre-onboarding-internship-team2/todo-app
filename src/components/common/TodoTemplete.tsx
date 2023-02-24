export const TodoTemplete = () => {
  return (
    <section>
      <article>
        <input
          type="text"
          data-testid="new-todo-input"
          placeholder="할일을 입력해주세요."
          className="input input-bordered w-full max-w-xs"
        />
        <button
          type="submit"
          data-testid="new-todo-add-button"
          className="btn btn-primary"
        >
          추가
        </button>
      </article>
      <article className="overflow-x-auto w-full">
        <ul className="w-full">
          <li>
            <form className="flex w-96 justify-evenly items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-primary border-black"
              />
              <p className="font-semibold">Hart Hagerty</p>
              <div>
                <button
                  data-testid="modify-button"
                  className="btn btn-ghost rounded-full hover:btn-accent hover:text-white btn-sm"
                >
                  수정
                </button>
                <button
                  data-testid="delete-button"
                  className="btn btn-ghost rounded-full hover:btn-error hover:text-white btn-sm"
                >
                  삭제
                </button>
              </div>
            </form>
          </li>
        </ul>
      </article>
    </section>
  );
};
