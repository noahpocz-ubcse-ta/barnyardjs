class Grammar {

    interpret(code){
        console.log(code);
    }

    parseTokens(tokens) {
        if(tokens[0] == 'BarnYard'){
            if(tokens[1] == ' '){
                if(tokens[2].includes('variable_name')){
                    if(tokens[3] == ' '){
                        if(tokens[4] == '='){
                            if(tokens[5] == ' '){
                                if(tokens[6] == 'new'){
                                    if(tokens[7] == ' '){
                                        if(tokens[8] == 'BarnYard'){
                                            if(tokens[9] == '();'){
                                                console.log('a new barnyard has been created');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if(tokens[0] == 'Chicken'){
            if(tokens[1] == ' '){
                if(tokens[2].includes('variable_name')){
                    if(tokens[3] == ' '){
                        if(tokens[4] == '='){
                            if(tokens[5] == ' '){
                                if(tokens[6] == 'new'){
                                    if(tokens[7] == ' '){
                                        if(tokens[8] == 'Chicken'){
                                            if(tokens[9] == '();'){
                                                console.log('a new chicken has been created');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if(tokens[0] == 'Pig'){
            if(tokens[1] == ' '){
                if(tokens[2].includes('variable_name')){
                    if(tokens[3] == ' '){
                        if(tokens[4] == '='){
                            if(tokens[5] == ' '){
                                if(tokens[6] == 'new'){
                                    if(tokens[7] == ' '){
                                        if(tokens[8] == 'Pig'){
                                            if(tokens[9] == '();'){
                                                console.log('a new pig has been created');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if(tokens[0] == 'Butterfly'){
            if(tokens[1] == ' '){
                if(tokens[2].includes('variable_name')){
                    if(tokens[3] == ' '){
                        if(tokens[4] == '='){
                            if(tokens[5] == ' '){
                                if(tokens[6] == 'new'){
                                    if(tokens[7] == ' '){
                                        if(tokens[8] == 'Butterfly'){
                                            if(tokens[9] == '();'){
                                                 console.log('a new butterfly has been made');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if(tokens[0].includes('variable_name')){
            if(tokens[1] == '.addChicken'){
                if(tokens[2] == '('){
                    if(tokens[3].includes('variable_name')){
                        if(tokens[4] == ');'){
                            console.log('adds a new chicken to barnyard');
                        }
                    }
                }
            }else if(tokens[1] == '.addPig'){
                if(tokens[2] == '('){
                    if(tokens[3].includes('variable_name')){
                        if(tokens[4] == ');'){
                            console.log('adds a new pig to barnyard');
                        }
                    }
                }
            }else if(tokens[1] == '.addButterfly'){
                if(tokens[2] == '('){
                    if(tokens[3].includes('variable_name')){
                        if(tokens[4] == ');'){
                            console.log('adds a new butterfly to barnyard');
                        }
                    }
                }
            }
        }

        if(tokens[0].includes('variable_name')){
            if(tokens[1] =='.start'){
                if(tokens[2] == '();'){
                    console.log('starts the animation');
                }
            }else if(tokens[1] == '.stop'){
                if(tokens[2] == '();'){
                    console.log('stops the animation');
                }
            }


        }

        if(tokens[0].includes('variable_name')){
            if(tokens[1] == '.remove'){
                if(tokens[2] == '('){
                    if(tokens[3] == 'variable_name'){
                        if(tokens[3] == ');'){
                            console.log('you have removed an animal');
                        }
                    }
                }
            }
        }

        console.log('it works!');
    }
}

tokens = ['variable_name: c','.stop','();'];
i = new Interpreter();
i.parseTokens(tokens);