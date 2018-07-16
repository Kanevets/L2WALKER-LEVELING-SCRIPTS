/*Начало любого квеста*/
Label(WindsOfFate_Choices_QuestStart)
Setval2(WindsOfFate_Choices_QuestStart,1)
Call(CheckAlive)
GetVal(FailCount,>,3)
{
Jmp(Initialize)
}
Msg(Quest WindsOfFate_Choices_QuestStart start)
Call(CheckAlive)

/*Проверка любого квеста получен/нет*/
Call(QuestDelay)
QuestStage(10753,<,1)
{
Call(UpdateVars)
SAVETEXT(TIME,CharName,CharLevel,CharPosX,CharPosY,Failed to get the quest: WindsOfFate_Choices_QuestStart)
SetVal(FailCount,1,inc)
Msg(Take the quest WindsOfFate_Choices_QuestStart failed. Try again...)
Jmp(WindsOfFate_Choices_QuestStart)
}
SetVal(FailCount,0)


/*Часть 1*/
Label(WindsOfFate_Choices_QuestStart_End)
Call(CheckAlive)
GetVal(FailCount,>,3)
{
Call(UpdateVars)
SAVETEXT(TIME,CharName,CharLevel,CharPosX,CharPosY,Quest WindsOfFate_Choices_QuestStart failed. Restart)
Jmp(Initialize)
}

/*Часть 2*/
Call(QuestDelay)
QuestStage(10753,>,0)
{
SetVal(FailCount,1,Inc)
Jmp(WindsOfFate_Choices_QuestStart_End)
}
SetVal(FailCount,0)
SetVal2(WindsOfFate_Choices_QuestStart,0)
