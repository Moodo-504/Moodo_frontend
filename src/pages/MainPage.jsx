import moodoLogo from '../assets/moodo_icons.png'

function MainPage() {
  const moodTags = [
    {
      id: 1,
      name: '행복',
      color: '#F7D774',
    },
    {
      id: 2,
      name: '평온',
      color: '#A9D9B5',
    },
    {
      id: 3,
      name: '불안',
      color: '#C9B6E4',
    },
    {
      id: 4,
      name: '분노',
      color: '#F3A19A',
    },
    {
      id: 5,
      name: '슬픔',
      color: '#A9C7E8',
    },
  ]

  return (
    <main className="min-h-screen bg-[#FFF8EF] text-[#2F2923]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-20 items-center justify-center rounded-2xl bg-white px-3 shadow-sm">
            <img
              src={moodoLogo}
              alt="Moodo logo"
              className="h-full w-full object-contain"
            />
          </div>

          <span className="text-2xl font-black tracking-[-0.03em]">
            Moodo
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-[#D8C7B8] bg-white px-5 py-2 text-sm font-bold text-[#2F2923] transition hover:bg-[#FFF0DF]">
            로그인
          </button>

          <button className="rounded-full bg-[#E9784F] px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#D9653D]">
            회원가입
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-12 md:grid-cols-2 md:pt-16">
        <div className="text-left">
          <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#E9784F] shadow-sm">
            To-do List + Mood Diary
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-[-0.06em] text-[#17120E] md:text-6xl">
            오늘의 할 일과 감정을
            <br />
            Moodo에 담아보세요.
          </h1>

          <p className="mt-6 max-w-xl break-keep text-base leading-8 text-[#827568] md:text-lg">
            Moodo는 할 일 기록과 감정 일기를 함께 관리하는 감성 생산성
            서비스입니다. 오늘 해야 할 일을 정리하고, 그 순간의 기분을
            나만의 감정으로 남겨보세요.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-[#E9784F] px-7 py-4 text-base font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#D9653D]">
              시작하기
            </button>

            <button className="rounded-2xl border border-[#D8C7B8] bg-white px-7 py-4 text-base font-black text-[#2F2923] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FFF0DF]">
              로그인
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#827568] shadow-sm">
              ✓ 오늘 할 일 관리
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#827568] shadow-sm">
              ✓ 감정 선택
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#827568] shadow-sm">
              ✓ 감정 유리병
            </span>
          </div>

          <div className="mt-10 max-w-sm rounded-[28px] border border-[#F0DEC9] bg-white/70 p-5 shadow-sm">
            <p className="mb-3 text-sm font-black text-[#E9784F]">
              Moodo Character
            </p>

            <img
              src={moodoLogo}
              alt="Moodo character set"
              className="h-20 object-contain"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-12 h-28 w-28 rounded-full bg-[#F5C8AA] blur-3xl"></div>
          <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-[#DDEED5] blur-3xl"></div>

          <div className="relative overflow-hidden rounded-[36px] border border-white bg-white/80 p-6 shadow-xl backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-black text-[#E9784F]">
                  Today Mood Jar
                </p>
                <h2 className="mt-1 text-2xl font-black text-[#17120E]">
                  오늘의 감정 유리병
                </h2>
              </div>

              <span className="rounded-full bg-[#FFF0DF] px-4 py-2 text-sm font-black text-[#A85B38]">
                Moodo
              </span>
            </div>

            <div className="relative min-h-[330px] overflow-hidden rounded-[30px] border border-[#F3E4D3] bg-[#FFF8EF] p-6">
              <div className="absolute left-8 top-8 rounded-3xl bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-black text-[#A79687]">
                  오늘의 한 줄
                </p>
                <p className="mt-1 text-sm font-black text-[#2F2923]">
                  해야 할 일을 감정과 함께 기록해요.
                </p>
              </div>

              <div className="absolute bottom-8 right-8 h-60 w-44 rounded-b-[70px] rounded-t-[24px] border-4 border-[#D7C2B0] bg-white/50"></div>
              <div className="absolute bottom-[280px] right-[54px] h-9 w-32 rounded-full border-4 border-[#D7C2B0] bg-white"></div>

              {moodTags.map((mood, index) => (
                <div
                  key={mood.id}
                  className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md"
                  style={{
                    right: `${48 + (index % 2) * 58}px`,
                    bottom: `${72 + index * 38}px`,
                  }}
                  title={mood.name}
                >
                  <span
                    className="h-8 w-8 rounded-full border-2 border-white"
                    style={{ backgroundColor: mood.color }}
                  ></span>
                </div>
              ))}

              <div className="absolute bottom-10 left-8 w-48 rounded-[26px] bg-white p-4 shadow-md">
                <img
                  src={moodoLogo}
                  alt="Moodo logo"
                  className="w-full object-contain"
                />
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-[#F3E4D3] bg-[#FFF8EF] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-black">오늘의 할 일</p>
                <span className="text-sm font-black text-[#E9784F]">
                  2 / 4 완료
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <span className="h-4 w-4 rounded-full border-2 border-[#E9784F]"></span>
                  <span className="text-sm font-bold">요구사항 정리하기</span>
                  <span className="ml-auto rounded-full bg-[#FFF0DF] px-3 py-1 text-xs font-black text-[#A85B38]">
                    행복
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E9784F] text-[10px] text-white">
                    ✓
                  </span>
                  <span className="text-sm font-bold text-[#A79687] line-through">
                    메인 페이지 디자인하기
                  </span>
                  <span className="ml-auto rounded-full bg-[#EAF5E8] px-3 py-1 text-xs font-black text-[#6A8F6E]">
                    평온
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <span className="h-4 w-4 rounded-full border-2 border-[#E9784F]"></span>
                  <span className="text-sm font-bold">
                    감정 유리병 기획하기
                  </span>
                  <span className="ml-auto rounded-full bg-[#F2EAF9] px-3 py-1 text-xs font-black text-[#8B6AA8]">
                    불안
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainPage