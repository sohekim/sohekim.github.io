import React from "react";
import "./WritingPage.css";
import ArticleCard from "../components/Article/ArticleCard";
import { ArticleItems } from "../components/Article/ArticleItems";

function WritingPage() {
  return (
    <>
      <div className="writing-container">
        <div className="row">
          <div className="column left" style={{ fontWeight: 300 }}>
            <p className="slash">&#9632;</p>
            <p className="intro-txt">
              I enjoy writing and sharing what I've learned on{" "}
              <a href="https://kim66s.medium.com/" className="medium2">
                Medium
              </a>
              .
              <br /> Topics include Java, OOP, and Backend.
            </p>
          </div>

          <div className="column right" style={{ fontWeight: 300 }}>
            <div className="items">
              {ArticleItems.map((card) => (
                <ArticleCard
                  key={card.id}
                  publisher={card.publisher}
                  title={card.title}
                  summary={card.summary}
                  url={card.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WritingPage;
