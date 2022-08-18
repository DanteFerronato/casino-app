
import React from 'react';

function Roulette() {
    return (
        <body>
            <div id="wrapper" className="d-flex flex-column">
                <header className="d-flex">
                    <div id="balance-container">
                        <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25,0 A1.25,2.5 -30,0,1 2.75,5 A1.25,2.5 -35,0,1 1.25,0 z" fill="#cb2" />
                        </svg>
                        <h2 id="balance">$0</h2>
                        <a href="#">Deposit</a>
                    </div>
                    <ul id="window-controls">
                        <li id="minimise-btn">
                            <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5,2.5 h4 z" stroke="#cb2" stroke-width="1" />
                            </svg>
                        </li>
                        <li id="window-btn">
                            <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1,1 h3v3h-3v-3 z" stroke="#cb2" stroke-width="1" fill="none" />
                            </svg>
                        </li>
                        <li id="close-btn">
                            <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1,1 L4,4 M4,1 L1,4 z" stroke="#cb2" stroke-width="1" />
                            </svg>
                        </li>
                    </ul>
                </header>
                <section className="d-flex mt-4">
                    <div id="main" className="position-relative w-100 h-100">
                        <img src="res/MesaCasino.png" alt="Casino table background" />
                        <div id="roulette-container">
                            <div className="position-relative">
                                <img src="res/lowerBorder.svg" id="lower-border" className="position-absolute img-fluid" />
                                <img src="res/americanRoulette.svg" id="wheel" className="position-absolute img-fluid roulette-spinning" />
                                <div className="position-absolute" id="roulette-ball">
                                    <svg viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">
                                        <circle cx="1" cy="1" r="1" stroke="none" fill="white" />
                                    </svg>
                                </div>
                                <img src="res/upperBorder.svg" id="upper-border" className="position-absolute img-fluid" />
                                <img src="res/handle.svg" id="handle" className="position-absolute img-fluid roulette-spinning" />
                            </div>
                        </div>
                        <div id="layout-container">
                            <div id="layout" className="w-100 h-100">
                                <div className="bg-black border border-white" id="carpet-10-1"><p className="user-select-none">28</p></div><div className="bg-danger border border-white" id="carpet-3-3"><p className="user-select-none">9</p></div><div className="bg-black border border-white" id="carpet-9-2"><p className="user-select-none">26</p></div><div className="bg-danger border border-white" id="carpet-10-3"><p className="user-select-none">30</p></div><div className="bg-black border border-white" id="carpet-4-2"><p className="user-select-none">11</p></div><div className="bg-danger border border-white" id="carpet-3-1"><p className="user-select-none">7</p></div><div className="bg-black border border-white" id="carpet-7-2"><p className="user-select-none">20</p></div><div className="bg-danger border border-white" id="carpet-11-2"><p className="user-select-none">32</p></div><div className="bg-black border border-white" id="carpet-6-2"><p className="user-select-none">17</p></div><div className="bg-danger border border-white" id="carpet-2-2"><p className="user-select-none">5</p></div><div className="bg-black border border-white" id="carpet-8-1"><p className="user-select-none">22</p></div><div className="bg-danger border border-white" id="carpet-12-1"><p className="user-select-none">34</p></div><div className="bg-black border border-white" id="carpet-5-3"><p className="user-select-none">15</p></div><div className="bg-danger border border-white" id="carpet-1-3"><p className="user-select-none">3</p></div><div className="bg-black border border-white" id="carpet-8-3"><p className="user-select-none">24</p></div><div className="bg-danger border border-white" id="carpet-12-3"><p className="user-select-none">36</p></div><div className="bg-black border border-white" id="carpet-5-1"><p className="user-select-none">13</p></div><div className="bg-danger border border-white" id="carpet-1-1"><p className="user-select-none">1</p></div><div className="bg-danger border border-white" id="carpet-9-3"><p className="user-select-none">27</p></div><div className="bg-black border border-white" id="carpet-4-1"><p className="user-select-none">10</p></div><div className="bg-danger border border-white" id="carpet-9-1"><p className="user-select-none">25</p></div><div className="bg-black border border-white" id="carpet-10-2"><p className="user-select-none">29</p></div><div className="bg-danger border border-white" id="carpet-4-3"><p className="user-select-none">12</p></div><div className="bg-black border border-white" id="carpet-3-2"><p className="user-select-none">8</p></div><div className="bg-danger border border-white" id="carpet-7-1"><p className="user-select-none">19</p></div><div className="bg-black border border-white" id="carpet-11-1"><p className="user-select-none">31</p></div><div className="bg-danger border border-white" id="carpet-6-3"><p className="user-select-none">18</p></div><div className="bg-black border border-white" id="carpet-2-3"><p className="user-select-none">6</p></div><div className="bg-danger border border-white" id="carpet-7-3"><p className="user-select-none">21</p></div><div className="bg-black border border-white" id="carpet-11-3"><p className="user-select-none">33</p></div><div className="bg-danger border border-white" id="carpet-6-1"><p className="user-select-none">16</p></div><div className="bg-black border border-white" id="carpet-2-1"><p className="user-select-none">4</p></div><div className="bg-danger border border-white" id="carpet-8-2"><p className="user-select-none">23</p></div><div className="bg-black border border-white" id="carpet-12-2"><p className="user-select-none">35</p></div><div className="bg-danger border border-white" id="carpet-5-2"><p className="user-select-none">14</p></div><div className="bg-black border border-white" id="carpet-1-2"><p className="user-select-none">2</p></div>
                                <div id="carpet-zero">
                                    <div className="border border-white" id="carpet-0"><p>0</p></div>
                                    <div className="border border-white" id="carpet-00"><p>00</p></div>
                                </div>
                                <div className="border border-white" id="carpet-low"><p>Manque</p></div>
                                <div className="border border-white" id="carpet-high"><p>Passe</p></div>
                                <div className="border border-white" id="carpet-even"><p>Pair</p></div>
                                <div className="border border-white" id="carpet-odd"><p>Impair</p></div>
                                <div className="border border-white" id="carpet-red"><p>Rouge</p></div>
                                <div className="border border-white" id="carpet-black"><p>Noir</p></div>
                                <div className="border border-white" id="carpet-dz-1"><p>P</p></div>
                                <div className="border border-white" id="carpet-dz-2"><p>M</p></div>
                                <div className="border border-white" id="carpet-dz-3"><p>D</p></div>
                                <div className="border border-white" id="carpet-13-1"></div>
                                <div className="border border-white" id="carpet-13-2"></div>
                                <div className="border border-white" id="carpet-13-3"></div>
                            </div>
                            <div id="bet-layout" className="w-100 h-100 position-absolute">
                                <div id="betgrid-1-1"></div><div id="betgrid-1-2"></div><div id="betgrid-1-3"></div><div id="betgrid-1-4"></div><div id="betgrid-1-5"></div><div id="betgrid-1-6"></div><div id="betgrid-1-7"></div><div id="betgrid-2-1"></div><div id="betgrid-2-2"></div><div id="betgrid-2-3"></div><div id="betgrid-2-4"></div><div id="betgrid-2-5"></div><div id="betgrid-2-6"></div><div id="betgrid-2-7"></div><div id="betgrid-3-1"></div><div id="betgrid-3-2"></div><div id="betgrid-3-3"></div><div id="betgrid-3-4"></div><div id="betgrid-3-5"></div><div id="betgrid-3-6"></div><div id="betgrid-3-7"></div><div id="betgrid-4-1"></div><div id="betgrid-4-2"></div><div id="betgrid-4-3"></div><div id="betgrid-4-4"></div><div id="betgrid-4-5"></div><div id="betgrid-4-6"></div><div id="betgrid-4-7"></div><div id="betgrid-5-1"></div><div id="betgrid-5-2"></div><div id="betgrid-5-3"></div><div id="betgrid-5-4"></div><div id="betgrid-5-5"></div><div id="betgrid-5-6"></div><div id="betgrid-5-7"></div><div id="betgrid-6-1"></div><div id="betgrid-6-2"></div><div id="betgrid-6-3"></div><div id="betgrid-6-4"></div><div id="betgrid-6-5"></div><div id="betgrid-6-6"></div><div id="betgrid-6-7"></div><div id="betgrid-7-1"></div><div id="betgrid-7-2"></div><div id="betgrid-7-3"></div><div id="betgrid-7-4"></div><div id="betgrid-7-5"></div><div id="betgrid-7-6"></div><div id="betgrid-7-7"></div><div id="betgrid-8-1"></div><div id="betgrid-8-2"></div><div id="betgrid-8-3"></div><div id="betgrid-8-4"></div><div id="betgrid-8-5"></div><div id="betgrid-8-6"></div><div id="betgrid-8-7"></div><div id="betgrid-9-1"></div><div id="betgrid-9-2"></div><div id="betgrid-9-3"></div><div id="betgrid-9-4"></div><div id="betgrid-9-5"></div><div id="betgrid-9-6"></div><div id="betgrid-9-7"></div><div id="betgrid-10-1"></div><div id="betgrid-10-2"></div><div id="betgrid-10-3"></div><div id="betgrid-10-4"></div><div id="betgrid-10-5"></div><div id="betgrid-10-6"></div><div id="betgrid-10-7"></div><div id="betgrid-11-1"></div><div id="betgrid-11-2"></div><div id="betgrid-11-3"></div><div id="betgrid-11-4"></div><div id="betgrid-11-5"></div><div id="betgrid-11-6"></div><div id="betgrid-11-7"></div><div id="betgrid-12-1"></div><div id="betgrid-12-2"></div><div id="betgrid-12-3"></div><div id="betgrid-12-4"></div><div id="betgrid-12-5"></div><div id="betgrid-12-6"></div><div id="betgrid-12-7"></div><div id="betgrid-13-1"></div><div id="betgrid-13-2"></div><div id="betgrid-13-3"></div><div id="betgrid-13-4"></div><div id="betgrid-13-5"></div><div id="betgrid-13-6"></div><div id="betgrid-13-7"></div><div id="betgrid-14-1"></div><div id="betgrid-14-2"></div><div id="betgrid-14-3"></div><div id="betgrid-14-4"></div><div id="betgrid-14-5"></div><div id="betgrid-14-6"></div><div id="betgrid-14-7"></div><div id="betgrid-15-1"></div><div id="betgrid-15-2"></div><div id="betgrid-15-3"></div><div id="betgrid-15-4"></div><div id="betgrid-15-5"></div><div id="betgrid-15-6"></div><div id="betgrid-15-7"></div><div id="betgrid-16-1"></div><div id="betgrid-16-2"></div><div id="betgrid-16-3"></div><div id="betgrid-16-4"></div><div id="betgrid-16-5"></div><div id="betgrid-16-6"></div><div id="betgrid-16-7"></div><div id="betgrid-17-1"></div><div id="betgrid-17-2"></div><div id="betgrid-17-3"></div><div id="betgrid-17-4"></div><div id="betgrid-17-5"></div><div id="betgrid-17-6"></div><div id="betgrid-17-7"></div><div id="betgrid-18-1"></div><div id="betgrid-18-2"></div><div id="betgrid-18-3"></div><div id="betgrid-18-4"></div><div id="betgrid-18-5"></div><div id="betgrid-18-6"></div><div id="betgrid-18-7"></div><div id="betgrid-19-1"></div><div id="betgrid-19-2"></div><div id="betgrid-19-3"></div><div id="betgrid-19-4"></div><div id="betgrid-19-5"></div><div id="betgrid-19-6"></div><div id="betgrid-19-7"></div><div id="betgrid-20-1"></div><div id="betgrid-20-2"></div><div id="betgrid-20-3"></div><div id="betgrid-20-4"></div><div id="betgrid-20-5"></div><div id="betgrid-20-6"></div><div id="betgrid-20-7"></div><div id="betgrid-21-1"></div><div id="betgrid-21-2"></div><div id="betgrid-21-3"></div><div id="betgrid-21-4"></div><div id="betgrid-21-5"></div><div id="betgrid-21-6"></div><div id="betgrid-21-7"></div><div id="betgrid-22-1"></div><div id="betgrid-22-2"></div><div id="betgrid-22-3"></div><div id="betgrid-22-4"></div><div id="betgrid-22-5"></div><div id="betgrid-22-6"></div><div id="betgrid-22-7"></div><div id="betgrid-23-1"></div><div id="betgrid-23-2"></div><div id="betgrid-23-3"></div><div id="betgrid-23-4"></div><div id="betgrid-23-5"></div><div id="betgrid-23-6"></div><div id="betgrid-23-7"></div><div id="betgrid-24-1"></div><div id="betgrid-24-2"></div><div id="betgrid-24-3"></div><div id="betgrid-24-4"></div><div id="betgrid-24-5"></div><div id="betgrid-24-6"></div><div id="betgrid-24-7"></div><div id="betgrid-25-1"></div><div id="betgrid-25-2"></div><div id="betgrid-25-3"></div><div id="betgrid-25-4"></div><div id="betgrid-25-5"></div><div id="betgrid-25-6"></div><div id="betgrid-25-7"></div><div id="betgrid-26-1"></div><div id="betgrid-26-2"></div><div id="betgrid-26-3"></div><div id="betgrid-26-4"></div><div id="betgrid-26-5"></div><div id="betgrid-26-6"></div><div id="betgrid-26-7"></div>
                                <div id="betgrid-0"></div>
                                <div id="betgrid-00"></div>
                                <div id="betgrid-0-00"></div>
                                <div id="betgrid-low"></div>
                                <div id="betgrid-high"></div>
                                <div id="betgrid-even"></div>
                                <div id="betgrid-odd"></div>
                                <div id="betgrid-red"></div>
                                <div id="betgrid-black"></div>
                                <div id="betgrid-dz-1"></div>
                                <div id="betgrid-dz-2"></div>
                                <div id="betgrid-dz-3"></div>
                            </div>
                        </div>
                        <div id="bet-input" className="position-absolute">
                            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="5.5" stroke="none" fill="#ddd"/>
                                <circle cx="7" cy="7" r="2" stroke="gold" fill="none"/>
                                <circle cx="7" cy="7" r="5" stroke="gold" stroke-width="1" stroke-dasharray="3 2" fill="none"/>
                            </svg>
                            <input type="number" min="0" max="999" />
                        </div>
                        <div id="chip-indicator" className="position-absolute">
                            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="5" stroke="white" stroke-width="1" stroke-dasharray="3 1" fill="none"/>
                            </svg>
                        </div>
                    </div>
                </section>
            </div>
            <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script>
	    </body>
    )
}

export default Roulette;