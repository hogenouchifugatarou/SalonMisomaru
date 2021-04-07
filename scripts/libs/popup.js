class Popup {
  constructor() {
    this.DOM = {};
    this.DOM.popup = document.querySelector('.popup');
    this.DOM.background = document.querySelector('.popup__background');
    this.DOM.close = document.querySelector('.popup__close');
    this.DOM.open = document.querySelector('.popup__open');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.popup.classList.toggle('is-show');
  }


  _addEvent() {
    this.DOM.open.addEventListener(this.eventType,this._toggle.bind(this));
    this.DOM.background.addEventListener(this.eventType,this._toggle.bind(this));
    this.DOM.close.addEventListener(this.eventType,this._toggle.bind(this));
  }
}