Call(SettingsFilter)
SET(MON,ATTACK,Nubulite Eye[ID=27544])
SET(MON,ATTACK,Ceremony Executor[ID=27510])
SET(RANGETYPE,DEFPOS,88238,12299,-5313,3000)
Call(WalkerOn)
SetVal(EXPTIME,0)
Label(WindsOfFate_Choices) /**/
Call(NoExp)
Call(CheckBuff)
Call(CheckAlive)
QuestStage(10753,==,3) /**/
{
Jmp(WindsOfFate_Choices) /**/
}
Call(Defence)
Jmp(Initialize)