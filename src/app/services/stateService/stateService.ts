import {Investment} from './model';

export class AppState{
    public Investments:Array<Investment>;

}


export class StateService {

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }


    getState():AppState{
        var res = JSON.parse(localStorage.getItem('MCDK_state'));

        if (res == null){
            res  = new AppState();
            res.Investments = [];
        }
        return res;

    }

    saveState(state:AppState){
        localStorage.setItem('MCDK_state', JSON.stringify(state));

    }
}