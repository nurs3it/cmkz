"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import "./styles.css";

const NotFound: React.FC = () => {
  const router = useRouter();
  const t = useTranslations("error_page.not_found");

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h2 className="subtitle">{t("title")}</h2>
        <p className="description">{t("description")}</p>
        <button className="home-button" onClick={() => router.push("/")}>
          {t("back_home")}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
