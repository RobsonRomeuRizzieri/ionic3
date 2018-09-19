import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let config_key_name = "config";

@Injectable()
export class ConfigProvider {   

    constructor() {
        console.log('Hello configProvider Provider');
    }

    // Recupera os dados do LocalStorage
    getConfigData(): any {
        // Se nulo retorna um objeto vazio
        return localStorage.getItem(config_key_name);
    }

    // define os dados no localStorage
    setConfigData(showSlide?: boolean, name?: string, username?: string) {
        let config = {
            showSlide: false,
            name: "",
            username: ""
        };
        // Se recebe o showSlide atualiza ele 
        if (showSlide){
            config.showSlide = showSlide;
        }
        // Se receber name atualiza ele
        if (name) {
            config.name = name;
        }
        // Se receber username atualiza ele
        if (username) {
            config.username = username;
        }
        // vai gravar o json em formato texto no localStorage
        localStorage.setItem(config_key_name, JSON.stringify(config));
    }
}
