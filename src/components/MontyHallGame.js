// Import useState and images required
import React,{useState} from 'react'
import closedDoor from './images/closed_door.jpg';
import selectedDoor from './images/selected_door.png';
import openDoor from './images/open_door.png';
import potOfGold from './images/pot_of_gold.png';


function MontyHallGame() {

    // Declare all the doors to Base state
    const[winningNumber,setWinningNumber] = useState(0);
    const[door1,setDoor1] = useState(0);
    const[door2, setDoor2] = useState(0);
    const[door3, setDoor3] = useState(0);
    const[win, setWin] = useState(0);
    const[lose, setLose] = useState(0);

    //Generate a random Number function
    function RandomSelector(max, min){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // setWinningNumber to a random number 1,2 or 3
    function resetWinningNumber(){      
        setWinningNumber(RandomSelector(0,4));      
    }


    // Display button according to state of door
    // Status 0 Doors not displayed. User clicks on START GAME
    // Status 1 Base state - all doors closed
    // Status 2 Selected door
    // Status 3 Closed door- Image same as Base state but different on click
    // Status 4 Open/Losing door
    // Status 5 Winning door with pot of gold
    function doorStart(door, status){
        if(status === 0){
        }
        else if(status === 1){
            return( <button onClick={()=>{selectFirstChoice(door); }}><img src={closedDoor} className="doorImage" alt="closed door" /></button>)   
        }
        else if(status === 2){
            return( <button onClick={()=>{selectSecondChoice (door)}}><img src={selectedDoor} className="doorImage" alt="selected door" /></button>)
        }
        else if(status === 3){
            return( <button onClick={()=>{selectSecondChoice (door)}}><img src={closedDoor} className="doorImage" alt="closed door" /></button>)   
        }
        else if(status === 4){
            return( <button><img src={openDoor} className="doorImage" alt="open door" /></button>)   
        }
        else if(status === 5){
            return( <button onClick={()=>{resetDoors()}}><img src={potOfGold} className="doorImage" alt="potOfGold" /></button>)   
        }
    }

    // First choice made by user triggers function
    function selectFirstChoice (door){

        //I have left the console.log for testing purposes as it states which door is the one with the pot of gold.
        console.log(winningNumber);

        //Second number options 1 or 2
        const secondRandom = RandomSelector(0, 3);

        if(door === 1){
            // Selected door change state to 2
            setDoor1(2);

            // If a Random number is on selected door, open a wrong door at random
            // Else if Random number is not on the selected door, open the 1 of the 2 doors that are wrong
            if(winningNumber ===1){
                if(secondRandom ===1){
                    setDoor2(3);
                    setDoor3(4);             
                }else{
                    setDoor2(4);
                    setDoor3(3);   
                }
            }
            else if(winningNumber ===2){
                setDoor2(3);
                setDoor3(4);
            }
            else if(winningNumber ===3){
                setDoor3(3);
                setDoor2(4);
            }
        }
        else if(door === 2){
            // Selected door change state to 2
            setDoor2(2);

            // If Random number is on selected door, open a wrong door at random
            // Else if Random number is not on the selected door, open the 1 of the 2 doors that are wrong
            if(winningNumber ===2){
                if(secondRandom ===1){
                    setDoor1(3);
                    setDoor3(4);             
                }else{
                    setDoor1(4);
                    setDoor3(3);   
                }
            } else if(winningNumber ===1){
                setDoor1(3);
                setDoor3(4);
            } else if(winningNumber ===3){
                setDoor3(3);
                setDoor1(4);
            }
            
        }
        else if(door === 3){
            // Selected door change state to 2
            setDoor3(2);

            // If Random number is on selected door, open a wrong door at random
            // Else if Random number is not on the selected door, open the 1 of the 2 doors that are wrong
            if(winningNumber ===3){
                if(secondRandom ===1){
                    setDoor1(3);
                    setDoor2(4);             
                }else{
                    setDoor1(4);
                    setDoor2(3);   
                }
            } else if(winningNumber ===1){
                setDoor1(3);
                setDoor2(4);  
            } else if(winningNumber ===2){
                setDoor2(3);
                setDoor1(4);
            }
        }
    }

    //Second choice of the user with the remaining doors
    // If selected door is equal to Random number Open winning door behind click and also the losing door
    // Else display losing door and open the door that it was behind
    function selectSecondChoice (door){
        if(door === 1){
            if(door === winningNumber){
                setDoor1(5);
                setWin(win+1);
                if((door2 === 2)||(door2 ===3)){
                    setDoor2(4);
                }else if((door3 ===2)||(door3 ===3)){
                    setDoor3(4);
                }
            } else{
                setDoor1(4);
                setLose(lose+1);
                if((door2 === 2)||(door2 ===3)){
                    setDoor2(5);
                }else if((door3 ===2)||(door3 ===3)){
                    setDoor3(5);
                }
            }
        }

        else if(door === 2){
            if(door === winningNumber){
                setDoor2(5);
                setWin(win+1);
                if((door1 === 2)||(door1 ===3)){
                    setDoor1(4);
                }else if((door3 ===2)||(door3 ===3)){
                    setDoor3(4);
                }
            } else{
                setDoor2(4);
                setLose(lose+1);
                if((door1 === 2)||(door1 ===3)){
                    setDoor1(5);
                }else if((door3 ===2)||(door3 ===3)){
                    setDoor3(5);
                }
            }
        }

        else if(door === 3){
            if(door === winningNumber){
                setDoor3(5);
                setWin(win+1);
                if((door1 === 2)||(door1 ===3)){
                    setDoor1(4);
                }else if((door2 ===2)||(door2 ===3)){
                    setDoor2(4);
                }
            } else{
                setDoor3(4);
                setLose(lose+1);
                if((door1 === 2) ||(door1 === 3)){
                    setDoor1(5);
                }else if((door2 ===2)||(door2 ===3)){
                    setDoor2(5);
                }
            }
        }
    }

    // Display button to start the game or reset the doors
    function startResetButton(){
        if(door1 === 0){
            return(<button onClick={()=>{resetDoors()}}>START GAME</button>)
        }else{
            return(<button onClick={()=>{resetDoors()}}>RESET DOORS</button>)
        }
    }

    // Reset the State of the doors to base state 1 and get a new winning number
    function resetDoors(){
        setDoor1(1);
        setDoor2(1);
        setDoor3(1);
        resetWinningNumber();
    }

    // Reset the game
    function resetGame(){
        setWin(0);
        setLose(0);
        resetDoors();
    }

   // Return the 3 doors of options
  return (
    <div>
       <center>
            {doorStart(1,door1)} 
            {doorStart(2,door2)} 
            {doorStart(3,door3)} 
        </center>
        <br/>
        <center>
            {startResetButton()}
            <br/><br/>
            <span>Wins: {win}</span><span> Lost: {lose}</span>
            <br/><br/>
            <button onClick={()=>{resetGame()}}>RESET GAME</button>
        </center>
        
    </div>
  )
}

export default MontyHallGame