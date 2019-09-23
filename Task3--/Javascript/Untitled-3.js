<!DOCTYPE html>
<html>
        <head>
                <meta charset=utf-8 />
                <title>Air Ticketing</title>
                <link rel="stylesheet" href="../Stylesheets/index.css">
                <script src="../Javascript/script.js"></script>
                <script src="../Javascript/main.js"></script>
        </head>
<body onload="welcome()">
    <header>Bon-Voyage</header>
        <a><img alt="Image-not found" class="logo" src="../Resource/logo.png"></a> 
            <div class="tbtn">
                <a id="trip_button" href="../Source/print.html">My Trip</a>
            </div>
            <div class="Logout">
                <a id="Logoutbtn" href="../Source/login.html">Logout</a>
            </div>
            
           <form class="form-submit" onsubmit="event.preventDefault();"  autocomplete="off">
            <div id="title">
                <h1>Flight Search</h1>
            </div>
            
                <label for="Domestic">Domestic</label>
                <input type="radio" name="radio" id="radiotype" value="Domestic" onclick="javascript:return changetextbox(1)" required="required">
        
                <label for="International">International</label>
                <input type="radio" name="radio" id="radiotype" value="International" onclick="javascript:return changetextbox(2);" required="required">
            </div>
            <br>
                <div class="source" id="start1" style = "display:none">
                    <fieldset>
                    <label for="from">Flying-From:</label>
                    <select id="start" onchange="updateSelect(this,'end');" name="indication_type[]">
                        <option value=" " selected="selected">City</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Cochin">Cochin</option>
                    
                        </select>
                    </fieldset>
                </div>
                <div class="destination" id="end1" style = "display:none">
                    <fieldset>
                        <label for="to">Flying-To:</label>
                        <select id="end" name="indication_type[]" onchange="updateSelect(this,'start');">
                            <option value=" " selected="selected">City</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Trichy">Trichy</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Cochin">Cochin</option>
                            
                        </select>
                    </fieldset>
                </div>
                <div class="source" id="start11" style = "display:none">
                    <fieldset>
                    <label for="from">Flying-From:</label>
                    <select id="startx" onchange="updatedSelect(this,'endx');" name="indication_type[]">
                        <option value=" " selected="selected">City</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Singapore">Singapore</option>
                        
                        </select>
                    </fieldset>
                </div>
                <div class="destination" id="end11" style = "display:none">
                    <fieldset>
                        <label for="to">Flying-To:</label>
                        <select id="endx" name="indication_type[]" onchange="updatedSelect(this,'startx');">
                            <option value=" " selected="selected">City</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Singapore">Singapore</option>
                           
                        </select>
                    </fieldset>
                </div>
                <div class="trip">
                        <fieldset>
                            <div class="radio-select">
                                    <label for="tripselection">Trip-Selection</label>
                                    <select id="trip" name="trip" onChange="">
                                            <option value=" " selected="selected">Select-Trip</option>
                                            <option value="Oneway-Trip">Oneway-Trip</option>
                                    </select> 
                            </div>
                            </div>
                        </fieldset> 
                </div>
                <div class="traveller" id="traveller">
                        <fieldset>
                            <label for="traveller">No.of.Traveller:</label>
                            <input type="number" id="travel" name="traveller" placeholder="Enter no.of.traveller">
                        </fieldset>
                </div>
                <div class="departdate" id="ifround">
                    <fieldset>
                        <label for="departure">Departure date:</label>
                        <input type="date" id="day1"  placeholder="Select date...">
                    </fieldset>
                </div>
                <div class="search">
                        <button type="submit" id="btn" onclick="validate()">Search</button>
                </div>
                <div id="message">

                </div>  
            </form>
            
</body>
</html>