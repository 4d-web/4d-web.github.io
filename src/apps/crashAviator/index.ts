import i18next from './../../language';

const t = i18next.t;

const gameConfig = {
  currency: 'UAH',
  maxBet: 4000,
  minBet: 5,
  minAutoOut: 1.01,
  maxAutoOut: 500,
  maxMembersShown: 14,
  test: true,
  board: {
    line: {
      linearGradientColor0: '#FFE400',
      linearGradientColor1: '#C76404',
    },
    lineShadow: {
      linearGradientColor0: '#C1521E',
      linearGradientColor1: '#C1521E',
    },
  },
};

const html = `
<div id="GameWrapper">
    <section id="GameFirstColumn" class="block">
        <div id="Players" class="block">
            <div id="PlayersTop" class="table-top-header">
                <div id="PlayersAmount" class="block">
                    <div id="PlayersAmountText" class="PlayersTopText">${t('countPlayers')}</div>
                    <div id="PlayersAmountValue" class="PlayersTopValue">0</div>
                </div>
                <div id="BetsAmount" class="block">
                    <div id="BetsAmountText" class="PlayersTopText">${t('betSum')}</div>
                    <div id="BetsAmountValue" class="PlayersTopValue">0 ${gameConfig.currency}</div>
                </div>
                <div id="TotalWinnings" class="block">
                    <div id="TotalWinningsText" class="PlayersTopText">${t('allWin')}</div>
                    <div id="TotalWinningsValue" class="PlayersTopValue">0 ${
                      gameConfig.currency
                    }</div>
                </div>
            </div>
            <div id="PlayersMiddle">
                <table id="PlayersTable" class="table">
                    <thead id="PlayersTableHeader" class="thead">
                        <tr class="thead-table-tr">
                            <th id="PlayersTableLogin" class="thead-table-th">${t('login')}</th>
                            <th id="PlayersTableCoef" class="thead-table-th">${t('coef')}</th>
                            <th id="PlayersTableBet" class="thead-table-th">${t('bet')}</th>
                            <th id="PlayersTableWin" class="thead-table-th">${t('win')}</th>
                        </tr>
                    </thead>
                    <tbody id="PlayersTableBody" class="tbody"></tbody>
                </table>
            </div>
            <div id="PlayersBottom">
                 <div id="moreWrapper" class="btn-wrapper">
                    <button id="btnShowMoreMembers" class="btn primary">${t('showMore')}</button>
                 </div>
            </div>
        </div>
    </section>
    <section id="GameSecondColumn" class="block">
        <div id="GameSpace" class="block waiting">
            <div id="GameSpacePanel"> 
                <div class="gameSpacePanelMessage">${t('waiting')}!</div>
            </div>
            <div id="GameSpaceInfo">
                <div class="GameSpaceInfoItems btn-wrapper">
                    <div id="modal-rules" class="modal">
                        <div class="modal-content">
                            <div class="modal-header modal-title-off">
                                <div class="modal-close">&#10799;</div>
                            </div>
                            <div class="modal-body">
                                <h2 class="ta-c ttu">${t('howToPlay')}</h2>
                                <ol> 
                                    <li>${t('rules_1')}</li>
                                    <!--<li>t(
                                      'rules_2',
                                      gameConfig.maxBet,
                                      gameConfig.minBet
                                    )</li>-->
                                    <li>${t('rules_3')}</li>
                                    <li>${t('rules_4')}</li>
                                    <li>${t('rules_5')}</li>
                                    <li>${t('rules_6')}</li>
                                    <li>${t('rules_7')}</li>
                                </ol>
                                <h3 class="ta-c ttu">${t('automaticBet')}</h3>
                                <ol> 
                                    <li>                                                
                                        <p>${t('rules_auto_1')}</p>
                                        <p>${t('rules_auto_2')}</p>
                                        <p>${t('rules_auto_3')}</p>
                                    </li>
                                    <li>${t('rules_auto_4')}</li>
                                    <li>${t('rules_auto_5')}</li>
                                </ol>
                            </div> 
                        </div>
                    </div>
                    <button class="btn second modal-button" data-modal-name="modal-rules">${t(
                      'rules'
                    )}</button>
                </div>
            </div>
            <div id="CrashGame">
                <div class="crashGameWrap">
                  <div id="shine" class="crashGameShine"></div>
                  <div id="airplane" class="crashGameAirplane"></div>
                  <div id="crashGameСoef">0</div>
                  <div id="crashGameTimer">
                    <div id="crashGameTimerCount"></div>
                    <div class="crashGameTimerCircle"></div>
                    <div id="crashGameTimerSegments" style="display: block;">
                        <div class="crashGameTimerSegment"></div>
                        <div class="crashGameTimerSegment"></div>
                        <div class="crashGameTimerSegment"></div>
                        <div class="crashGameTimerSegment"></div>
                        <div class="crashGameTimerSegment"></div>
                        <div class="crashGameTimerSegment"></div>
                        <div class="crashGameTimerSegment"></div>
                        <div class="crashGameTimerSegment"></div>
                        <div class="crashGameTimerSegment"></div>
                        <div class="crashGameTimerSegment"></div>
                    </div>
                   </div>
                </div>
                <svg viewBox="0 0 1230 500" width="1230" height="500" class="crashGameSvg">
                  <defs>
                    <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="15" flood-color="#fff" flood-opacity="1"></feDropShadow>
                    </filter>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="10.5"></feGaussianBlur>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.819608 0 0 0 0 0.345098 0 0 0 0 0.121569 0 0 0 1 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                    </filter>
                    <linearGradient id="grad" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stop-color="${
                        gameConfig.board.line.linearGradientColor0
                      }"></stop>
                      <stop offset="100%" stop-color="${
                        gameConfig.board.line.linearGradientColor1
                      }"></stop>
                    </linearGradient>
                    <linearGradient id="grad2" x1="250" y1="170" x2="250" y2="365" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stop-color="${
                        gameConfig.board.lineShadow.linearGradientColor0
                      }"></stop>
                      <stop offset="100%" stop-color="${
                        gameConfig.board.lineShadow.linearGradientColor1
                      }" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <g>
                    <path d="M47 324 h1160" class="crashGameGrid"></path>
                    <path d="M47 263 h1160" class="crashGameGrid"></path>
                    <path d="M47 202 h1160" class="crashGameGrid"></path>
                    <path d="M47 141 h1160" class="crashGameGrid"></path>
                    <path d="M47 80 h1160" class="crashGameGrid"></path>
                  </g>
                  <g clip-path="url(#a)">
                    <path id="lineShadow" fill="url(#grad2)" d="M47 385 Q 0 385 0 87 L 0 385 Z"></path>
                    <path id="line" filter="url(#shadow)" d="M47 -100 Q 0 -100 -100 0"></path>
                    <circle id="dot" cx="0" cy="0" r="7" fill="#de8a06"></circle>
                  </g>
                  <clipPath id="a">
                    <rect width="1160" height="365" x="47" y="20" stroke-width="0"></rect>
                  </clipPath>
                  <g class="crash-game__axis" style="">
                    <path d="M47 385 h1160"></path>
                  </g>
                  <g>
                    <circle transform="translate(110 410)" cx="0" cy="0" r="3" class="CrashGameCircle CrashGameCircle-x"></circle>
                    <circle transform="translate(260 410)" cx="0" cy="0" r="3" class="CrashGameCircle CrashGameCircle-x"></circle>
                    <circle transform="translate(410 410)" cx="0" cy="0" r="3" class="CrashGameCircle CrashGameCircle-x"></circle>
                    <circle transform="translate(561 410)" cx="0" cy="0" r="3" class="CrashGameCircle CrashGameCircle-x"></circle>
                    <circle transform="translate(710 410)" cx="0" cy="0" r="3" class="CrashGameCircle CrashGameCircle-x"></circle>
                    <circle transform="translate(860 410)" cx="0" cy="0" r="3" class="CrashGameCircle CrashGameCircle-x"></circle>
                    <circle transform="translate(1010 410)" cx="0" cy="0" r="3" class="CrashGameCircle CrashGameCircle-x"></circle>
                    <circle transform="translate(1160 410)" cx="0" cy="0" r="3" class="CrashGameCircle CrashGameCircle-x"></circle>
                  </g>
                  <g>
                    <circle transform="translate(0 330)" cx="17" cy="-5" r="3" class="CrashGameCircle CrashGameCircle-y"></circle>
                    <circle transform="translate(0 268)" cx="17" cy="-5" r="3" class="CrashGameCircle CrashGameCircle-y"></circle>
                    <circle transform="translate(0 206)" cx="17" cy="-5" r="3" class="CrashGameCircle CrashGameCircle-y"></circle>
                    <circle transform="translate(0 146)" cx="17" cy="-5" r="3" class="CrashGameCircle CrashGameCircle-y"></circle>
                    <circle transform="translate(0 86)" cx="17" cy="-5" r="3" class="CrashGameCircle CrashGameCircle-y"></circle>
                  </g>
                </svg>
                <div id="crashGameBg">
                    <div class="crashGameBgRunning crashGameMountain crashGameMountain-5"></div>
                    <div class="crashGameBgRunning crashGameMountain crashGameMountain-4"></div>
                    <div class="crashGameBgRunning crashGameMountain crashGameMountain-3"></div>
                    <div class="crashGameBgRunning crashGameMountain crashGameMountain-2"></div>
                    <div class="crashGameBgRunning crashGameMountain"></div>
                </div>
            </div>
        </div>
        <section id="GameHistory" class="block">
            <div class="table-top-header table-items-left">
                <div class="block">
                    <div class="table-top-header-title">${t('history')}</div>
                </div>
            </div>
            <div id="GameHistoryMiddle">
                <table class="table">
                    <thead class="thead">
                        <tr class="thead-table-tr">
                            <th id="historyTableDate" class="thead-table-th">${t('date')}</th>
                            <th id="historyTableTime" class="thead-table-th">${t('time')}</th>
                            <th id="historyTableBet" class="thead-table-th">${t('bet')}</th>
                            <th id="historyTableCoef" class="thead-table-th">${t('coef')}</th>
                            <th id="historyTableWin" class="thead-table-th">${t('win')}</th>
                        </tr>
                    </thead>
                    <tbody id="historyTableBody" class="tbody table-empty"></tbody>
                </table>
                <div id="historyEmpty">${t('youDoNotHaveAnyBetsYet')}</div>
            </div>
        </section>                   
        <section id="GameBet" class="block">
            <div class="tabs">
                <div class="tab">
                  <button data-tab-name="ManualBet" class="tab-button active">${t(
                    'manualBet'
                  )}</button>
                  <button data-tab-name="AutomaticBet" class="tab-button">${t(
                    'automaticBet'
                  )}</button>
                </div>
                <div id="ManualBet" class="tab-content" style="display: block">
                    <div class="GameBetPanel">
                        <div class="panel-items">
                             <div class="input-wrapper-label">
                                <label for="bet" class="input-label">Ставка</label>
                                <input id="bet" class="input" type="number" min="${
                                  gameConfig.minBet
                                }" value="5" placeholder="≥ 5">
                            </div>
                        </div>
                        <div id="GameBetPanelFastBet" class="panel-items"></div>
                        <div class="GameBetButton panel-items paddingOff grid-item col-2">
                            <div class="btn-wrapper paddingOff">
                                <button id="placeBet" class="btn primary">${t('placeBet')}</button>
                            </div>
                            <div class="btn-wrapper paddingOff">
                                 <button id="pickUpTheWin" class="btn second">${t(
                                   'pickUpTheWin'
                                 )}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="AutomaticBet" class="tab-content">
                    <div class="GameBetPanel">
                         <div id="AutomaticBetInputs" class="panel-items grid-item col-2">
                            <div class="input-wrapper-label">
                                <label for="baseBet" class="input-label">
                                    ${t('bet')}
                                </label>
                                <input id="baseBet" class="input" type="number" min="${
                                  gameConfig.minBet
                                }" value="5" placeholder="≥ 5">
                            </div>
                            <div class="input-wrapper-label">
                                <label for="autoOutput" class="input-label">
                                    ${t('autoOutput')} (≥ 1.01)
                                </label>
                                <input id="autoOutput" class="input" type="number" min="${
                                  gameConfig.minAutoOut
                                }" value="1.01" placeholder="≥ 1.01">
                            </div>
                        </div>
                        <div class="GameBetButton panel-items paddingOff grid-item col-2">
                            <div class="btn-wrapper paddingOff">
                                <button id="autoBet" class="btn primary">${t(
                                  'doAutomaticBet'
                                )}</button>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </section>
    </section>
    <div id="modal-error-connection-clean" class="modal">
        <div class="modal-content modal-center-all">
            <div class="modal-header">
                <div class="modal-title">${t('error')}</div>
                <div class="modal-close">&#10799;</div>
            </div>
            <div class="modal-body ta-c">
               <p>
                ${t('failedToConnectToServer')}<br/>
                ${t('refreshThePage')}
               </p>
               <br/>
               <button id="reloadPage" class="btn primary">${t('continue')}</button>
            </div> 
        </div>
    </div>
</div>`;

export default html;
