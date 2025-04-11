import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t: translate } = useTranslation("common");

  const router = useRouter();
  const { locale, locales, push } = useRouter();

  const handleLocale = (l: any) => () => {
    push("/", undefined, { locale: l });
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <p>
        Selected Language:{" "}
        <span className="font-[700] text-primaryColor ">{locale}</span>
      </p>
      <div>
        <h1>{translate("welcome")}</h1>
        <p>{translate("description")}</p>
        <div className="flex flex-col gap-2 mt-5">
          <p>Translate to your language here</p>
          <div className="flex items-center gap-2">
            {locales?.map((l, index) => (
              <button
                onClick={handleLocale(l)}
                key={index}
                className="bg-primaryColor disabled:bg-disabled text-purpleWhite flex py-2.5 px-6 rounded-[12px]"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => router.push("/signup")}
          className="bg-primaryColor disabled:bg-disabled text-purpleWhite flex py-2.5 px-6 rounded-[12px] mt-10"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: any }) => {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
};
