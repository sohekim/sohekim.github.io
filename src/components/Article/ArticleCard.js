import React from "react";
import "./ArticleCard.css";

/**
 * @param: (thumbnail, title, type, desc, url)
 * @returns: ArticleCard
 */

function ArticleCard({ publisher, title, summary, url }) {
  return (
    <div
      className="articlecard-container"
      onClick={() => (window.location.href = url)}
    >
      <span style={{ fontSize: 13}}>Published in</span>&nbsp;
      <span style={{ fontSize: 13, fontWeight: 500 }}>{publisher}</span>
      <p className="title" style={{ fontSize: 16, fontWeight: 600 }}>{title}</p>
      <p className="summary">{summary}</p>
      <hr className="solid" />
    </div>
  );
}

export default ArticleCard;
