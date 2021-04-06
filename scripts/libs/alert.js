let  Specification = {
  theme: '癒し・高貴・温かみ・愛愛しさ',
  period: '約1ヵ月',
  reference: 'オンライン学習サービス「Udemy」 【JavaScript＆CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編）',
  outline: '二つ目のポートフォリオサイト。飼っている愛猫がマッサージ店を経営したら。という仮定での架空サイト',  
  Planguage: 'HTML・CSS3(scss記法のSASSファイルをコンパイルしています)・Javascript(フレームワークは無し)',
  tool: 'gimp(無料画像編集ソフト)',
  conscious: 'テーマに寄り添った色やフォントを意識して試行錯誤しました。アニメーション等も目を引けるようにし、サイトを見た人が疲れないようにバランスをとるように意識しました。',
  task: '今後はJavascriptのフレームワーク・webpack・gitの学習を進めたいと思います。',
  reflection: '製作途中、誤ってデータを削除してしまったことがありました。gitを使用することで、すこし前のコードに戻れることができると知りましたので、次に制作する際はgitを上手く活用しながら進めていきたいです。'
};

class Alert {
  constructor() {
    this.DOM = {};
    this.DOM.copyright = document.querySelector('.footer__copyright');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }

  _alert() {
    window.alert(`
      概要: ${Specification.outline}
      制作期間: ${Specification.period}
      使用言語: ${Specification.Planguage}
      参考資料: ${Specification.reference}
      ツール: ${Specification.tool}
      テーマ: ${Specification.theme}
      意識したこと: ${Specification.conscious}
      反省点: ${Specification.reflection}
      課題: ${Specification.task}
    `);
  }

  _addEvent() {
    this.DOM.copyright.addEventListener(this.eventType,this._alert);
  }
}