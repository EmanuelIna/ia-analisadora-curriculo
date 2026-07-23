import React, { useState, type FormEvent } from "react";
import Navbar from "~/components/Navbar";

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {};
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Feedback inteligente para o seu currículo</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>{" "}
              <img src="/images/resume-scan.gif" className="w-full" />
            </>
          ) : (
            <h2>
              Coloque seu currículo e receba feedback de ATS e dicas de
              melhorias
            </h2>
          )}
          {!isProcessing && (
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-8"
            >
              <div className="form-div">
                <label htmlFor="company-name">Nome da Empresa</label>
                <input
                  type="text"
                  name="company-name"
                  placeholder="Digite o nome da empresa"
                  id="company-name"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-title">Cargo</label>
                <input
                  type="text"
                  name="job-title"
                  placeholder="Digite o nome do cargo"
                  id="job-title"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-description">Descrição do Cargo</label>
                <textarea
                  rows={5}
                  name="job-description"
                  placeholder="Digite a descrição do cargo"
                  id="job-description"
                />
              </div>
              <div className="form-div">
                <label htmlFor="uploader">Upload do Currículo</label>
                <div>Uploader</div>
              </div>

              <button className="primary-button" type="submit">
                Enviar
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default upload;
