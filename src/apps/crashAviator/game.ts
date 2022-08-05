import './crashAviator.module.scss';
import {
  EAxis,
  ECrashAviatorMembersStatus,
  ECrashAviatorMessage,
  ECrashAviatorStatus,
  IArgAndNumberMap,
  ICrashAviatorBet,
  ICrashAviatorData,
} from '../../interfacesAndEnums/apps';
import i18next from './../../language';

const t = i18next.t;

export default crashAviator;

export enum EInputsName {
  BET = 'bet',
  BASE_BET = 'baseBet',
  AUTO_OUTPUT = 'autoOutput',
}

type Param = {
  gameName: string;
  local: string;
};

function crashAviator(): void {
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

  document.getElementById('content-data').insertAdjacentHTML(
    'afterbegin',
    `
            <div id="GameWrapper">
                <section id="GameFirstColumn" class="block">
                    <div id="Players" class="block">
                        <div id="PlayersTop" class="table-top-header">
                            <div id="PlayersAmount" class="block">
                                <div id="PlayersAmountText" class="PlayersTopText">${t(
                                  'countPlayers'
                                )}</div>
                                <div id="PlayersAmountValue" class="PlayersTopValue">0</div>
                            </div>
                            <div id="BetsAmount" class="block">
                                <div id="BetsAmountText" class="PlayersTopText">${t('betSum')}</div>
                                <div id="BetsAmountValue" class="PlayersTopValue">0 ${
                                  gameConfig.currency
                                }</div>
                            </div>
                            <div id="TotalWinnings" class="block">
                                <div id="TotalWinningsText" class="PlayersTopText">${t(
                                  'allWin'
                                )}</div>
                                <div id="TotalWinningsValue" class="PlayersTopValue">0 ${
                                  gameConfig.currency
                                }</div>
                            </div>
                        </div>
                        <div id="PlayersMiddle">
                            <table id="PlayersTable" class="table">
                                <thead id="PlayersTableHeader" class="thead">
                                    <tr class="thead-table-tr">
                                        <th id="PlayersTableLogin" class="thead-table-th">${t(
                                          'login'
                                        )}</th>
                                        <th id="PlayersTableCoef" class="thead-table-th">${t(
                                          'coef'
                                        )}</th>
                                        <th id="PlayersTableBet" class="thead-table-th">${t(
                                          'bet'
                                        )}</th>
                                        <th id="PlayersTableWin" class="thead-table-th">${t(
                                          'win'
                                        )}</th>
                                    </tr>
                                </thead>
                                <tbody id="PlayersTableBody" class="tbody"></tbody>
                            </table>
                        </div>
                        <div id="PlayersBottom">
                             <div id="moreWrapper" class="btn-wrapper">
                                <button id="btnShowMoreMembers" class="btn primary">${t(
                                  'showMore'
                                )}</button>
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
                                        <th id="historyTableDate" class="thead-table-th">${t(
                                          'date'
                                        )}</th>
                                        <th id="historyTableTime" class="thead-table-th">${t(
                                          'time'
                                        )}</th>
                                        <th id="historyTableBet" class="thead-table-th">${t(
                                          'bet'
                                        )}</th>
                                        <th id="historyTableCoef" class="thead-table-th">${t(
                                          'coef'
                                        )}</th>
                                        <th id="historyTableWin" class="thead-table-th">${t(
                                          'win'
                                        )}</th>
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
                                            <button id="placeBet" class="btn primary">${t(
                                              'placeBet'
                                            )}</button>
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
            </div>`
  );

  const buttonBet = document.getElementById('placeBet');
  const buttonPickUp = document.getElementById('pickUpTheWin');
  const buttonAutoBet = document.getElementById('autoBet');
  const buttonShowMoreMembers = document.getElementById('btnShowMoreMembers');
  const buttonReloadPage = document.getElementById('reloadPage');
  const inputBet = document.getElementById('bet') as HTMLInputElement;
  const inputBaseBet = document.getElementById('baseBet') as HTMLInputElement;
  const inputAutoOutput = document.getElementById('autoOutput') as HTMLInputElement;
  const airplane = document.getElementById('airplane');
  const crashGameCoef = document.getElementById('crashGameСoef');
  const crashGameBg = document.getElementById('crashGameBg');
  const crashGameCirclesX = document.getElementsByClassName('CrashGameCircle-x');
  const crashGameCirclesY = document.getElementsByClassName('CrashGameCircle-y');
  const fastBetPanel = document.getElementById('GameBetPanelFastBet');
  const fastBetItems = document.getElementsByClassName('FastBetItem');
  const modalButton = document.getElementsByClassName('modal-button');
  const modalClose = document.getElementsByClassName('modal-close');
  const modal = document.getElementsByClassName('modal');
  const tabsButtons = document.getElementsByClassName('tab-button');
  const buttonsFastBet: number[] = [5, 10, 30, 50, 100, 200, 500, 0];
  const socket: WebSocket = new WebSocket('wss://goldcupua-stage.ltcenter.info/api/bet');

  let gameTimer: ICrashAviatorData['tm'];
  let gameStatus: ECrashAviatorStatus;
  let gameCoefficient: ICrashAviatorData['sc'] = 0.0;
  let sendData: ICrashAviatorBet;
  let members: ICrashAviatorData['members'];
  let currentMembersLength = 0;
  let autoPlay: boolean;
  let isMove = false;
  let isGameTimerActive = false;
  let isValidBet = true;
  let isValidAutoBet = true;
  let isValidAutoBaseBet = true;
  let isValidAutoOutput = true;

  buttonBet.setAttribute('disabled', 'true');
  buttonPickUp.setAttribute('disabled', 'true');
  buttonAutoBet.setAttribute('disabled', 'true');

  buttonsFastBet.forEach((data: number) => {
    fastBetPanel.innerHTML += `<div class="FastBetItem" data-value="${data}"">${
      data === 0 ? '&#x2715' : data
    }</div>`;
  });

  const send = (
    type: ICrashAviatorBet['type'] = 'start',
    sum: number = null,
    gameCoefficient: ICrashAviatorBet['hold'] = null
  ) => {
    if (type === 'stop') {
      sendData = {
        type: type,
      };
      socket.send(JSON.stringify(sendData));
      sendData.type = null;
    } else {
      sendData = {
        type: type,
        sum: sum,
        hold: gameCoefficient,
      };
      socket.send(JSON.stringify(sendData));
    }
  };

  const isActive = (el: HTMLElement, isAdd: boolean) => {
    isAdd ? el.classList.add('active') : el?.classList.remove('active');
  };

  const clickTabsButton = function () {
    Array.from(document.getElementsByClassName('tab-content')).forEach(
      (element: HTMLElement) => (element.style.display = 'none')
    );
    Array.from(tabsButtons as HTMLCollectionOf<Element>).forEach((element: Element) =>
      element.classList.remove('active')
    );

    document.getElementById(this.getAttribute('data-tab-name')).style.display = 'block';
    this.classList.add('active');
  };

  const clickFastBetItem = function () {
    const attributeValue: number = parseFloat(this.getAttribute('data-value'));
    let newInputValue;
    inputBet.value === '' ? (newInputValue = 0) : (newInputValue = parseFloat(inputBet.value));
    attributeValue !== 0 ? (newInputValue = newInputValue + attributeValue) : (newInputValue = '');
    inputBet.value = newInputValue;
    isValidFunk(EInputsName.BET, newInputValue);
  };

  const clickModalShow = function () {
    for (let i = 0; i < modal.length; i++) modal[i].classList.remove('active');

    if (this.classList.contains('active')) {
      isActive(this, false);
      isShowModal(this.getAttribute('data-modal-name'), false);
    } else {
      isActive(this, true);
      isShowModal(this.getAttribute('data-modal-name'), true);
    }
  };

  const clickModalHide = function (el, e) {
    if (el === e.target) {
      isActive(document.querySelector(`[data-modal-name="${el.getAttribute('id')}"`), false);
      isActive(el, false);
    }
  };

  const clickModalClose = function () {
    isActive(
      document.querySelector(`[data-modal-name="${this?.closest('.modal')?.getAttribute('id')}"`),
      false
    );
    isActive(this.closest('.modal'), false);
  };

  Array.from(modal).forEach(function (modal) {
    window.addEventListener('click', function (event) {
      clickModalHide(modal, event);
    });
  });

  const clickArray = (el: HTMLCollectionOf<Element>, funk: () => void) => {
    Array.from(el).forEach(function (el) {
      el.addEventListener('click', funk);
    });
  };

  clickArray(modalClose, clickModalClose);
  clickArray(tabsButtons, clickTabsButton);
  clickArray(modalButton, clickModalShow);
  clickArray(fastBetItems, clickFastBetItem);

  buttonAutoBet.addEventListener('click', (event) => {
    event.preventDefault();
    autoPlay = true;
    const sum: number = parseFloat(inputBaseBet.value);
    const hold: number = parseFloat(inputAutoOutput.value);
    isValidAutoBet ? send('start', sum, hold) : null;
  });

  buttonBet.addEventListener('click', (event) => {
    event.preventDefault();
    autoPlay = false;
    const sum: number = parseFloat(inputBet.value);
    isValidBet ? send('start', sum) : null;
  });

  buttonPickUp.addEventListener('click', () => send('stop'));
  buttonShowMoreMembers.addEventListener('click', () => showMembers(members, true));
  buttonReloadPage.addEventListener('click', () => window.location.reload());

  const resize = () => {
    const _w_fs = document.documentElement.offsetWidth / 1920;
    const _h_fs = document.documentElement.offsetHeight / 935;
    const newScale = _w_fs < _h_fs ? _w_fs.toFixed(2) : _h_fs.toFixed(2);

    document.documentElement.style.fontSize = `${+newScale * 100}px`;
  };

  window.addEventListener('resize', resize);
  resize();

  // const generateHref = (host, path) => {
  //     host = new URL(host);
  //
  //     host.pathname = host.pathname + path;
  //     new URLSearchParams(host.search.replace(new RegExp(':', 'g'), '&')).forEach((param, name) => {
  //         host.searchParams.set(name, param);
  //     });
  //
  //     return host.href;
  // };

  // socket.onopen = () => {};

  // socket.onmessage = function (event) {
  //   responseData(event);
  // };

  // socket.onclose = function (event) {
  //   if (event.wasClean) {
  //     // 1005
  //     console.log(t('connectionClosed'));
  //     isShowModal('modal-error-connection-clean', true);
  //   } else {
  //     // 1006
  //     console.log('Lost socket connection'); // например, "убит" процесс сервера
  //     isShowModal('modal-error-connection-clean', true);
  //   }
  //   console.log('Code: ' + event.code + ' why: ' + event.reason);
  // };

  // socket.onerror = function (error) {
  //   console.log('Error socket ' + error);
  //   socket.close();
  //   isShowModal('modal-error-connection-clean', true);
  // };

  const crashAirplane = () => {
    const dot = document.getElementById('dot');
    const line = document.getElementById('line');
    const shadow = document.getElementById('lineShadow');

    isGameTimerActive = false;
    isMove = false;
    airplane.classList.add('crash');
    crashGameBg.classList.remove('running');

    line.setAttribute('d', `M47 -100 Q 0 -100 -100 0`);
    shadow.setAttribute('d', `M47 385 Q 0 385 0 87 L 0 385 Z`);
    dot.setAttribute('cx', '0');
    dot.setAttribute('cy', '0');
  };

  const moveAirplane = () => {
    airplane.classList.remove('crash');
    crashGameBg.classList.add('running');
    airplane.style.display = 'flex';
    isMove = true;

    const moveConfig = {
      moveUpRight: {
        lineX: 0,
        // y = 0 (390)
        lineY: 390,
        lineR: 0,
        // start point plane
        planeX: -5,
        planeY: 14,
        planeR: 0,
        endPointAirplane: 80,
        endPointLine: 70,
        startPointCircleX: 40,
        startPointCircleY: 36,
        endPointCircleX: 1250,
        endPointCircleY: 350,
        stepMovePointCircle: 1,
      },
    };
    const pointsCircle: IArgAndNumberMap = {
      X: {},
      Y: {},
    };

    const moveCircles = (
      crashGameCirclesElements: HTMLCollectionOf<Element> = crashGameCirclesX,
      axis: EAxis = EAxis.X,
      startPoint: number = moveConfig.moveUpRight.startPointCircleX,
      endPoint: number = moveConfig.moveUpRight.endPointCircleX
    ) => {
      let i = 0;

      Array.prototype.forEach.call(crashGameCirclesElements, function (circleElement, key) {
        const pointCircle: string = circleElement.getAttribute('transform');
        const reg = /\d+/g;
        const isCurrentAxisX: boolean = axis === EAxis.X;
        const isStartPoint: boolean = pointsCircle[axis][key] <= startPoint;
        const isEndPoint: boolean = pointsCircle[axis][key] >= endPoint;
        const circlesXY: number = isCurrentAxisX ? 410 : 0;
        let pointCircleNumber: RegExpExecArray;
        let translate;
        let isEven;

        while ((pointCircleNumber = reg.exec(pointCircle)) != null) {
          isEven = axis === EAxis.X ? ++i & 1 : !(++i & 1);
          isEven ? (pointsCircle[axis][key] = parseInt(pointCircleNumber[0])) : null;
        }

        if (isCurrentAxisX) {
          translate = isStartPoint
            ? endPoint + ' ' + circlesXY
            : (pointsCircle[axis][key] =
                pointsCircle[axis][key] - moveConfig.moveUpRight.stepMovePointCircle) +
              ' ' +
              circlesXY;
        } else {
          translate = isEndPoint
            ? circlesXY + ' ' + startPoint
            : circlesXY +
              ' ' +
              (pointsCircle[axis][key] =
                pointsCircle[axis][key] + moveConfig.moveUpRight.stepMovePointCircle);
        }

        circleElement.setAttribute('transform', `translate(${translate})`);
      });
    };

    const movePoint = (
      lineX: number,
      lineY: number,
      lineRotate: number,
      airplaneX: number,
      airplaneY: number,
      airplaneRotate: number
    ) => {
      if (isMove) {
        if (airplaneX <= moveConfig.moveUpRight.endPointAirplane) {
          airplane.style.bottom = airplaneY + '%';
          airplane.style.left = airplaneX + '%';
          airplane.style.transform = 'rotate(' + airplaneRotate + 'deg)';
        }
        if (lineY >= moveConfig.moveUpRight.endPointLine) {
          const dot = document.getElementById('dot');
          const line = document.getElementById('line');
          const shadow = document.getElementById('lineShadow');
          const dShadow = `M 47 385 Q ${lineRotate} 385 ${lineX} ${lineY} L ${lineX} 385 Z`;
          const dLine = `M 47 385 Q ${lineRotate} 385 ${lineX} ${lineY}`;

          line.setAttribute('d', dLine);
          shadow.setAttribute('d', dShadow);
          dot.setAttribute('cx', lineX.toString());
          dot.setAttribute('cy', lineY.toString());
        }

        moveCircles();
        moveCircles(crashGameCirclesY, EAxis.Y, 56, 350);
      } else {
        clearInterval(timerPoint);
      }
    };

    const timerPoint = setInterval(
      () =>
        movePoint(
          (moveConfig.moveUpRight.lineX = moveConfig.moveUpRight.lineX + 2),
          (moveConfig.moveUpRight.lineY = moveConfig.moveUpRight.lineY - 0.6),
          (moveConfig.moveUpRight.lineR = moveConfig.moveUpRight.lineR + 1),
          (moveConfig.moveUpRight.planeX = moveConfig.moveUpRight.planeX + 0.16),
          (moveConfig.moveUpRight.planeY = moveConfig.moveUpRight.planeY + 0.115),
          (moveConfig.moveUpRight.planeR = moveConfig.moveUpRight.planeR - 0.07)
        ),
      20
    );
  };

  const showMembers = (members: ICrashAviatorData['members'], isButtonClick = false) => {
    const membersElement = document.getElementById('PlayersTableBody');

    const isShowBtn = (btn, isShow = true, isAll = true) => {
      if (isShow) {
        btn.classList.add('show');
        btn.innerText = isAll ? t('showMore') : t('hide');
      } else {
        btn.classList.remove('show');
        btn.innerText = t('showMore');
      }
    };

    const showTable = () => {
      membersElement.innerHTML = '';
      for (let i = 0; i < currentMembersLength; i++) {
        membersElement.innerHTML += `
                    <tr class="PlayersItem tbody-table-tr ${members[i].status}">
                        <td class="PlayersItemLogin tbody-table-td">${members[i].id}</td>
                        <td class="PlayersItemCoef tbody-table-td">
                            ${members[i].score ? 'x' + members[i].score.toFixed(2) : 'x0'}
                        </td>
                        <td class="PlayersItemBet tbody-table-td">
                            ${members[i].bet ? members[i].bet.toFixed(2) : '0'} ${
          gameConfig.currency
        }</td>
                        <td class="PlayersItemWin tbody-table-td">
                            ${
                              members[i].score // @ts-ignore
                                ? (members[i].bet.toFixed(2) * members[i].score.toFixed(2)).toFixed(
                                    2
                                  )
                                : '0'
                            } ${gameConfig.currency}
                        </td>
                    </tr>
                `;
      }
    };

    if (members.length > gameConfig.maxMembersShown) {
      currentMembersLength === members.length
        ? isShowBtn(buttonShowMoreMembers, true, false)
        : isShowBtn(buttonShowMoreMembers, true, true);

      if (currentMembersLength === 0) {
        currentMembersLength =
          members.length > gameConfig.maxMembersShown ? gameConfig.maxMembersShown : members.length;
      } else {
        if (isButtonClick) {
          currentMembersLength !== members.length
            ? (currentMembersLength = members.length)
            : (currentMembersLength = gameConfig.maxMembersShown);
        }
      }
    } else {
      currentMembersLength = members.length;
      isShowBtn(buttonShowMoreMembers, false);
    }

    showTable();
  };

  const showHistory = (history) => {
    const elHistory = document.getElementById('historyTableBody');

    const showTable = () => {
      elHistory.innerHTML = '';
      for (let i = 0; i < history?.length; i++) {
        elHistory.innerHTML += `
                    <tr class="tbody-table-tr">
                        <td class="tbody-table-td">06.02.2021</td>
                        <td class="tbody-table-td">20:02</td>
                        <td class="tbody-table-td">100 UAH</td>
                        <td class="tbody-table-td">2.00x</td>
                        <td class="tbody-table-td">200 UAH</td>
                    </tr>
                `;
      }
    };

    showTable();
  };

  const showTimer = () => {
    const timerSegments = 10;
    const startTimerPoint = 9;
    const crashGameTimerSegments = document.getElementById('crashGameTimerSegments');
    const crashGameTimer = document.getElementById('crashGameTimer');
    const rotateStep = 180 / (timerSegments / 2);

    isGameTimerActive = true;
    isActive(crashGameTimer, true);
    document.getElementById('crashGameTimerCount').innerHTML = `${startTimerPoint}`;

    const timerCount = setInterval(() => {
      const gameTimerInt = Math.floor(gameTimer);
      console.error('gameTimerInt', gameTimerInt);
      // @ts-ignore
      if (gameTimerInt <= 1 || !isGameTimerActive) {
        isActive(crashGameTimer, false);
        isActive(crashGameTimerSegments, false);
        document.getElementById('crashGameTimerCount').innerText = '';
        crashGameTimerSegments.style.transform = 'rotate(180deg)';
        clearInterval(timer);
        clearInterval(timerCount);
      }
    }, 1100);

    const timer = setInterval(() => {
      const gameTimerInt = Math.floor(gameTimer);
      // console.error('gameTimerInt', gameTimerInt);
      if (gameTimer <= startTimerPoint) {
        document.getElementById('crashGameTimerCount').innerHTML = `${gameTimerInt - 1}`;

        if (gameTimerInt >= 1) {
          crashGameTimerSegments.style.transform = `rotate(${rotateStep * gameTimerInt - 180}deg)`;
          gameTimerInt <= 6 ? isActive(crashGameTimerSegments, true) : null;
        }
      }
    }, 1000);
  };

  const isShowModal = (modalElementId: string, isShow: boolean) => {
    const element = document.getElementById(modalElementId).classList;
    isShow ? element.add('active') : element.remove('active');
  };

  const isShowGameMessage = (type: ECrashAviatorMessage, isShow: boolean, timeout: number) => {
    setTimeout(() => {
      if (isShow) {
        isActive(document.getElementById('GameSpacePanel'), true);
      } else {
        airplane.style.display = 'none';
        airplane.style.transform = 'unset';
        airplane.style.left = '0';
        airplane.style.right = '0';
        isActive(document.getElementById('GameSpacePanel'), false);
      }
    }, timeout);

    switch (type) {
      case ECrashAviatorMessage.WAITING:
        setTimeout(() => {
          if (isShow) {
            airplane.classList.add('center');
            airplane.classList.remove('crash');
          } else {
            airplane.classList.remove('center');
          }
        }, timeout);
        break;
    }
  };

  const isValidFunk = (name: EInputsName, value: number) => {
    const massage = t('valueMaximumOrMinimum');

    const massageShow = (input: HTMLInputElement, isShow: boolean) => {
      const errorElement = document.querySelector(`[data-input-error="${input.id}"]`);

      if (isShow) {
        errorElement?.remove();
        input.insertAdjacentHTML(
          'beforebegin',
          `<div class="input-error" data-input-error="${input.id}">${massage}</div>`
        );
      } else {
        errorElement?.remove();
      }

      setTimeout(() => {
        document.querySelector(`[data-input-error="${input.id}"]`)?.remove();
      }, 7000);
    };

    if (EInputsName.BET === name) {
      isValidBet = value >= gameConfig.minBet && value <= gameConfig.maxBet;
      massageShow(inputBet, !isValidBet);
    }

    if (EInputsName.BASE_BET === name) {
      isValidAutoBaseBet = value >= gameConfig.minBet && value <= gameConfig.maxBet;
      massageShow(inputBaseBet, !isValidAutoBaseBet);
    }

    if (EInputsName.AUTO_OUTPUT === name) {
      isValidAutoOutput = value >= gameConfig.minAutoOut && value <= gameConfig.maxAutoOut;
      massageShow(inputAutoOutput, !isValidAutoOutput);
    }

    isValidAutoBet = isValidAutoBaseBet && isValidAutoOutput;
  };

  const change = (el: HTMLInputElement, name: EInputsName) => {
    el.addEventListener('change', (event) =>
      isValidFunk(name, parseFloat((event.target as HTMLInputElement).value))
    );
  };

  change(inputAutoOutput, EInputsName.AUTO_OUTPUT);
  change(inputBaseBet, EInputsName.BASE_BET);
  change(inputBet, EInputsName.BET);

  const responseData = (e) => {
    const data: ICrashAviatorData = gameConfig.test ? e : JSON.parse(e.data);
    const membersCount = (data?.count ? data.count : 0).toString();
    const winSum = (data?.win ? data.win : 0).toString();
    const sumBets = (data?.bets ? data.bets : 0).toString();
    const dataHistory = null;

    members = data?.members;
    gameStatus = data?.st;

    const isShowCoef = (isShow: boolean) =>
      isShow ? isActive(crashGameCoef, true) : isActive(crashGameCoef, false);

    const isDisabledButton = (button: HTMLElement, isDisabled: boolean, isValid = true) => {
      if (isValid) {
        isDisabled ? button.setAttribute('disabled', 'true') : button.removeAttribute('disabled');
      } else {
        button.setAttribute('disabled', 'true');
      }
    };

    switch (gameStatus) {
      case ECrashAviatorStatus.FLY:
        isGameTimerActive = false;
        sendData?.type === 'start'
          ? isDisabledButton(buttonPickUp, false)
          : isDisabledButton(buttonPickUp, true);

        if (data?.sc !== undefined) gameCoefficient = data.sc;
        data?.sc >= sendData?.hold && autoPlay ? send('stop') : null;
        // console.log('FLY');
        if (!isMove) {
          isGameTimerActive = false;
          isShowCoef(true);
          moveAirplane();
          isDisabledButton(buttonBet, true);
          isDisabledButton(buttonAutoBet, true);
        }
        break;
      case ECrashAviatorStatus.CRASH:
        if (isMove) {
          console.warn('CRASH');
          crashAirplane();
          isShowCoef(false);
          isDisabledButton(buttonBet, true);
          isDisabledButton(buttonPickUp, true);
          isDisabledButton(buttonAutoBet, true);
          isShowGameMessage(ECrashAviatorMessage.WAITING, true, 2000);
        }
        break;
      case ECrashAviatorStatus.WAITING:
        if (data?.tm !== undefined) gameTimer = data?.tm;
        !isGameTimerActive ? showTimer() : null;
        isShowCoef(false);
        isShowGameMessage(ECrashAviatorMessage.WAITING, false, 0);
        if (gameTimer <= 1) {
          isDisabledButton(buttonBet, true);
          isDisabledButton(buttonAutoBet, true);
        } else {
          isDisabledButton(buttonAutoBet, false, !!isValidAutoBet);
          isDisabledButton(buttonBet, false, !!isValidBet);
        }
        isDisabledButton(buttonPickUp, true);
        break;
    }

    document.getElementById('crashGameСoef').innerHTML = `${gameCoefficient?.toFixed(2)}x`;
    document.getElementById('PlayersAmountValue').innerHTML = membersCount;
    document.getElementById('TotalWinningsValue').innerHTML = winSum + ' ' + gameConfig.currency;
    document.getElementById('BetsAmountValue').innerHTML = sumBets + ' ' + gameConfig.currency;

    members ? showMembers(members) : null;
    dataHistory
      ? showHistory(dataHistory)
      : isActive(document.getElementById('historyEmpty'), true);

    return data;
  };

  const dataTest: ICrashAviatorData = {
    //  1 - данные игроков | 2 - данные игры
    t: 1,
    // статус 1 - ожидание, 2 - летим, 3 - упали
    st: ECrashAviatorStatus.FLY,
    // текущий коэффициент
    sc: 0,
    // время в сек обратный отсчет
    tm: 10,
    // всего игроков
    count: 2,
    // сумма ставок
    bets: 10,
    // сумма выигрышей
    win: 20,
    // игроки
    members: [
      {
        id: '23424',
        name: 'TestUser1',
        bet: 10,
        score: 999,
        status: ECrashAviatorMembersStatus.WIN,
      },
    ],
  };

  function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const startTest = () => {
    let randCrash = null;
    let isRandCrashNumberNotExist = true;
    let isStopTestGame = false;
    let wait = 5;
    let dataNum = 1000;
    dataTest.tm = 10;
    dataTest.st = 2;

    console.error('Start test');

    for (let i = 0; i < dataNum; i++) {
      const runTestGame = () => {
        if (isStopTestGame) return;
        console.log('data = ', i, isStopTestGame);
        dataTest.t = 2;
        i === 0 ? (dataTest.st = ECrashAviatorStatus.FLY) : null;

        switch (dataTest.st) {
          case ECrashAviatorStatus.FLY:
            console.log('FLY');
            dataTest.sc = parseFloat(
              (parseFloat(dataTest.sc.toFixed(2)) + getRandomFloat(0.01, 0.1, 2)).toFixed(2)
            );

            if (isRandCrashNumberNotExist) {
              randCrash = getRndInteger(0, 10);
              isRandCrashNumberNotExist = false;
            }

            if (i === randCrash) dataTest.st = ECrashAviatorStatus.CRASH;
            break;
          case ECrashAviatorStatus.CRASH:
            if (wait === 0) {
              dataTest.st = ECrashAviatorStatus.WAITING;
            } else {
              wait = parseFloat((wait - 0.1).toFixed(1));
            }
            break;
          case ECrashAviatorStatus.WAITING:
            if (dataTest.tm === 0) {
              dataNum = 0;
              isStopTestGame = true;
              if (isStopTestGame) return stop();
            } else {
              dataTest.tm = parseFloat((dataTest.tm - 0.1).toFixed(1));
              console.warn('WAITING = ', dataTest.tm);
            }
            break;
        }

        console.log(dataTest);
        responseData(dataTest);
      };

      const timerGame = setTimeout(runTestGame, i * 100);

      function stop() {
        clearTimeout(timerGame);
        setTimeout(startTest, 100);
      }
    }
  };

  startTest();
}
