import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

const HomeViewAll = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex justify-between py-12">
      <h3 className="text-2xl font-medium">{t("latest")}</h3>
      <Link className="inline-block text-main" href="/shop">
        {t("view")}
      </Link>
    </div>
  );
};

export default HomeViewAll;
