import { ShineButton } from "src/shared/ShineButton";

export const About = () => {
  return (
    <div className="about flex flex-col items-center gap-4 py-4 *:font-bold">
      <img src="/photo.jpg" alt="Фото" className="h-80" />
      <h2>Мокеев Артём</h2>
      <h3>
        Резюме:{" "}
        <a href="/cv.pdf" target="_blank">
          <ShineButton text={"CV.pdf"} onClick={() => {}} />
        </a>
      </h3>
      <h3>
        Telegram:{" "}
        <a href="https://t.me/Leritas" className=" text-blue-500">
          @Leritas
        </a>
      </h3>
      <h3>
        Телефон:{" "}
        <a href="https://wa.me/79102118246" className="text-green-600">
          +79102118246
        </a>
      </h3>
    </div>
  );
};
