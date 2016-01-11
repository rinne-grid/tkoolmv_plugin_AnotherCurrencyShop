//=============================================================================
// AnotherCurrencyShop.js
//=============================================================================
/*:ja
 * @plugindesc ゴールドではなく、変数の値で売買を行うショップを表示します
 * @author rinne_grid
 *
 * @param currencyName
 * @desc 通貨の名称です。（ＭＰ、ＰＴ等を指定します）
 * @default ＰＴ
 *
 * @param variableNumber
 * @desc 通貨として利用する変数の値です。(デフォルトでは1番目の変数が指定されます)
 * @default 1
 *
 * @ help
 *
 * プラグインコマンド
 *    AnotherCurrencyShop on    # ゴールドを使わないショップを有効にします
 *    AnotherCurrencyShop off   # ゴールドを使わないショップを無効にします
 */

(function(){

    var parameters = PluginManager.parameters('AnotherCurrencyShop');
    var currencyName = String(parameters['Currency Name'] || 'ＰＴ');
    var variableNumber = String(parameters['Variable Number'] || '1');

    //-------------------------------------------------------------------------
    // 関数退避
    //-------------------------------------------------------------------------
    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;

    var _Scene_Shop_doBuy = Scene_Shop.prototype.doBuy;
    var _Scene_Shop_doSell = Scene_Shop.prototype.doSell;
    var _Window_Gold_value = Window_Gold.prototype.value;
    var _Window_Gold_currencyUnit = Window_Gold.prototype.currencyUnit;


    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if(command === 'AnotherCurrencyShop') {
            switch(args[0]) {
            case 'on':
                $gameSystem.rngd_hook_on_AnotherCurrencyShop();
                break;
            case 'off':
                $gameSystem.rngd_hook_off_AnotherCurrecyShop();
                break;
            }
        }
    };

    //-------------------------------------------------------------------------
    // ゴールド以外のショップON
    //-------------------------------------------------------------------------
    Game_System.prototype.rngd_hook_on_AnotherCurrencyShop = function() {
        Scene_Shop.prototype.doBuy = function(number) {
            var _current = $gameVariables.value(variableNumber);
            _current -= number * this.buyingPrice();
            $gameVariables.setValue(variableNumber, _current);
            $gameParty.gainItem(this._item, number);
        };

        Scene_Shop.prototype.doSell = function(number) {
            var _current = $gameVariables.value(variableNumber);
            _current += number * this.sellingPrice();
            $gameVariables.setValue(variableNumber, _current);
            $gameParty.loseItem(this._item, number);
        };

        Window_Gold.prototype.value = function() {
            // プラグインで指定した変数の値を金額として返す
            return $gameVariables.value(variableNumber);
        };

        Window_Gold.prototype.currencyUnit = function() {
            return currencyName;
        };
    };

    //-------------------------------------------------------------------------
    // ゴールド以外のショップOFF
    //-------------------------------------------------------------------------
    Game_System.prototype.rngd_hook_off_AnotherCurrecyShop = function() {
        Scene_Shop.prototype.doBuy = function(number) {
            _Scene_Shop_doBuy.call(this, number);
        };

        Scene_Shop.prototype.doSell = function(number) {
            _Scene_Shop_doSell.call(this, number);
        };

        Window_Gold.prototype.value = function() {
            return _Window_Gold_value.call(this);
        };

        Window_Gold.prototype.currencyUnit = function() {
            return _Window_Gold_currencyUnit.call(this);
        };

    };

})();