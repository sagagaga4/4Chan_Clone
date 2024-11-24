import React from 'react';
import './Board.css';

const Board: React.FC = () => {
    return (
        <div className="board">
            <div className="boardbar">
                <h3>Boards</h3>
            </div>
            <div className="column_1">
                <h5 style={{ textDecoration: 'underline', display: 'inline' }}>
                    Japanese Culture
                </h5>
                <ul>
                    <li>
                        <a className="boardlink" href="#">
                            Anime & Manga
                        </a>
                    </li>
                    <li>
                        <a className="boardlink" href="#">
                            Anime/Cute
                        </a>
                    </li>
                    <li>
                        <a className="boardlink" href="#">
                            Anime/Wallpapers
                        </a>
                    </li>
                    <li>
                        <a className="boardlink" href="#">
                            Mecha
                        </a>
                    </li>
                    <li>
                        <a className="boardlink" href="#">
                            Cosplay & EGL
                        </a>
                    </li>
                    <li>
                        <a className="boardlink" href="#">
                            Cute/Male
                        </a>
                    </li>
                    <li>
                        <a className="boardlink" href="#">
                            Flash
                        </a>
                    </li>
                    <li>
                        <a className="boardlink" href="#">
                            Transportation
                        </a>
                    </li>
                    <li>
                        <a className="boardlink" href="#">
                            Otaku Culture
                        </a>
                    </li>
                    <li>
                        <a className="boardlink" href="#">
                            Virtual Youtubers
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Board;
