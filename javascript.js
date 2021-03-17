//------ js for page 1:-------

$(document).ready(function () {
    if ($('#page1').css('display') == 'block'){
        console.log("visible");
        Page1();
    }
});

function Page1(){
    $(function() { 
        $('#flag-functions').val(1);
        $('#Li').click(increase_Li);
        $('#Wi').click(increase_Wi);
        $('#Ld').click(decrease_Ld);
        $('#Wd').click(decrease_Wd);
        $('[ data-value1]').click(Main);
              
    });
}
   
    function decrease_Ld() {
        switch ( $('#flag-functions').val()){
                
            case "1" :
                var value = $(this).parent().find('[data-value1]').val();
                if(value > 15  ) {
                    value=value-0.5;
                 //   console.log(value +  value.toFixed(2));
                    $(this).parent().find('[data-value1]').val(value);
                    valueChange();
                         
                }else{
                    document.getElementById("result-placeholder").innerHTML="  يجب ألا يقل الطول عن 15  متر   ";
                    $(this).parent().find('[data-value1]').val(15);
                    $('#input-L-hide').val(15);
                    console.log(  $('#input-L-hide').val());
                    valueChange();
                }
                break ;
            case "10":
                var value = $(this).parent().find('[data-value6]').val();
                if(value > 3) {
                    value=value-0.5;
                    $(this).parent().find('[data-value6]').val(value);
                    $('#input-Lw-hide').val(value);
                    console.log("Length is : "+  $('#input-Lw-hide').val());
                       valueChange();
                }else {
                    document.getElementById("placeholder5").innerHTML="  يجب ألا يقل الطول عن 3  متر   ";
                    $(this).parent().find('[data-value6]').val(3);
                    $('#input-Lw-hide').val(3);
                     valueChange();
                }
                break;
            case "11":
                var value = $(this).parent().find('[data-value7]').val();
                if(value > 3) {
                    value=value-0.5;
                    $(this).parent().find('[data-value7]').val(value);
                    $('#input-Ls-hide').val(value);
                    console.log("Length is : "+  $('#input-Ls-hide').val());
                       valueChange();
                }else {
                    document.getElementById("placeholder6").innerHTML="  يجب ألا يقل الطول عن 3  متر   ";
                    $(this).parent().find('[data-value7]').val(3);
                    $('#input-Ls-hide').val(3);
                    console.log("Length is : "+  $('#input-Ls-hide').val());
                     valueChange();
                }
                 break;
        }// End switch  
    } // End Fun

    function decrease_Wd() {
        switch ( $('#flag-functions').val()){
                
            case "1" :
                var value = $(this).parent().find('[data-value1]').val();
                if(value > 15 ) {
                    value=value-0.5;
                    $(this).parent().find('[data-value1]').val(value);
                    valueChange();
                } else{
                    document.getElementById("result-placeholder").innerHTML="  يجب ألا يقل العرض عن 15   متر  ";
                     $(this).parent().find('[data-value1]').val(15);
                     $('#input-W-hide').val(15);
                     valueChange();
                }
                break;
            case "10" :
                var value = $(this).parent().find('[data-value6]').val();
                if(value > 2 ) {
                    value=value-0.5;
                    $(this).parent().find('[data-value6]').val(value);
                     $('#input-Ww-hide').val(value);
                     console.log("Width is : "+  $('#input-Ww-hide').val());
                       valueChange();
                } else{
                    document.getElementById("placeholder5").innerHTML="  يجب ألا يقل العرض عن 2 متر  ";
                     $(this).parent().find('[data-value6]').val(2);
                     $('#input-Ww-hide').val(2);
                    console.log("width is : "+  $('#input-Ww-hide').val());
                     valueChange();

                }
                break ;
            case "11":
                var value = $(this).parent().find('[data-value7]').val();
                if(value > 2 ) {
                    value=value-0.5;
                    $(this).parent().find('[data-value7]').val(value);
                     $('#input-Ws-hide').val(value);
                     console.log("Width is : "+  $('#input-Ws-hide').val());
                      valueChange();
                } else{
                    document.getElementById("placeholder6").innerHTML="  يجب ألا يقل العرض عن 2 متر  ";
                     $(this).parent().find('[data-value7]').val(2);
                     $('#input-Ws-hide').val(2);
                    console.log("width is : "+  $('#input-Ws-hide').val());
                     valueChange();

                }
                 break ;
        } // End switch 
    }  // End Fun

    function increase_Li() {
        switch ( $('#flag-functions').val()){
            case "1" : 
                var value = $(this).parent().find('[data-value1]').val();
                if(value < 50) {
                    value++; 
                    value = value - 0.5 ;
                    $(this).parent().find('[data-value1]').val(value);
                    valueChange();
                }else{
                    document.getElementById("result-placeholder").innerHTML="   يجب ألا يزيد الطول عن 50  متر  ";
                     $(this).parent().find('[data-value1]').val(50);
                     $('#input-L-hide').val(50);
                     valueChange();
                }
                break ;
            case "10" :
                  var value = $(this).parent().find('[data-value6]').val();
                if(value < 15) {
                    value++; 
                    value = value - 0.5 ;
                    $(this).parent().find('[data-value6]').val(value);
                    $('#input-Lw1-hide').val(value);
                    console.log("Length is : "+  $('#input-Lw-hide').val());
                    valueChange();

                }else{
                    document.getElementById("placeholder5").innerHTML="   يجب ألا يزيد الطول عن 15  متر  ";
                    $(this).parent().find('[data-value6]').val(15);
                    $('#input-Lw1-hide').val(15);
                    console.log("Length is : "+  $('#input-Lw-hide').val());
                     valueChange();
                }
                break ;
            case "11" :
                var value = $(this).parent().find('[data-value7]').val();
                if(value < 15) {
                    value++; 
                    value = value - 0.5 ;
                    $(this).parent().find('[data-value7]').val(value);
                     $('#input-Ls-hide').val(value);
                     console.log("Length is : "+  $('#input-Ls-hide').val());
                    valueChange();
                }else{
                    document.getElementById("placeholder6").innerHTML="   يجب ألا يزيد الطول عن 15  متر  ";
                     $(this).parent().find('[data-value7]').val(15);
                     $('#input-Ls-hide').val(15);
                    console.log("Length is : "+  $('#input-Ls-hide').val());
                     valueChange();
                }
                break ;
        } // End switch
    } // End fun

    function increase_Wi() {
        
        console.log("flag func : "+$('#flag-functions').val());
        switch ( $('#flag-functions').val()){
                
            case "1" :
                var value = $(this).parent().find('[data-value1]').val();
                if(value == 0)
                    $(this).parent().find('[data-value1]').val(15);
                if(value < 50)  {
                    value++; 
                    value = value - 0.5 ;
                    $(this).parent().find('[data-value1]').val(value);
                    valueChange();
                } else{
                    document.getElementById("result-placeholder").innerHTML="   يجب ألا يزيد  العرض عن 50  متر     ";
                      $(this).parent().find('[data-value1]').val(50);
                     $('#input-W-hide').val(50);
                     valueChange();
                }
                 break ; 
            case "10" :
                var value = $(this).parent().find('[data-value6]').val();
                if(value < 8)  {
                    value++; 
                    value = value - 0.5 ;
                    $(this).parent().find('[data-value6]').val(value);
                    $('#input-Ww-hide').val(value);
                    console.log("Width is : "+  $('#input-Ww-hide').val());
                     valueChange()

                } else{
                    document.getElementById("placeholder5").innerHTML="   يجب ألا يزيد  العرض عن 8  متر     ";
                      $(this).parent().find('[data-value6]').val(8);
                     $('#input-Ww-hide').val(8);
                    console.log("width is : "+  $('#input-Ww-hide').val());
                     valueChange();
                }
                break;
            case "11" :
                var value = $(this).parent().find('[data-value7]').val();
                if(value < 8)  {
                    value++; 
                    value = value - 0.5 ;
                    $(this).parent().find('[data-value7]').val(value);
                    $('#input-Ws-hide').val(value);
                    console.log("Width is : "+  $('#input-Ws-hide').val());
                  valueChange();

                } else{
                    document.getElementById("placeholder6").innerHTML="   يجب ألا يزيد  العرض عن 8  متر     ";
                      $(this).parent().find('[data-value7]').val(8);
                     $('#input-Ws-hide').val(8);
                    console.log("width is : "+  $('#input-Ws-hide').val());
                     valueChange();
                }
                 break;
        }// End switch
    } // End fun

    function valueChange() {
           
        switch ( $('#flag-functions').val()){
                
            case "1" : 
                 var length , width;
                var resultText = document.getElementById("result-placeholder");
                length = document.getElementById('input-L').value; 
                parseFloat(length).toFixed(2);
                $('#input-L-hide').val(length);
                width = document.getElementById('input-W').value;
                parseFloat(width).toFixed(2);
                $('#input-W-hide').val(width);
                var area1 = length * width;
                var area = area1.toFixed(2);
                $('#input-result-hidden').val(area);
                console.log("area1:"+ document.getElementById('input-result-hidden').value);
                resultText.innerHTML = '<span id="area-p">  مساحة الأرض =  ' + area  +  '  متر مربع  </span>';
                break ;
                
            case "10" :
                  var lengthP10 , widthP10;
                var resultText = document.getElementById("placeholder5");
                lengthP10 = document.getElementById('input-Lw').value; 
                $('#input-Lw1-hide').val(lengthP10);
                console.log("Length is : "+  $('#input-Lw1-hide').val());
                widthP10 = document.getElementById('input-Ww').value;
                $('#input-Ww-hide').val(widthP10);
                console.log("width is : "+  $('#input-Ww-hide').val());
                var volueGround = lengthP10 * widthP10 * 3 ;
                $('#volum-GroundTank').val(volueGround);
                console.log("volueGround:"+ document.getElementById('volum-GroundTank').value);
                resultText.innerHTML = '<span id="area-p">  يحسب ارتفاع الخزان (3) متر <br> حجم خزان المياه الأرضي = ' +volueGround +' متر مكعب      </span>';
                break;
                
                case "11" :
                 var lengthP11 , widthP11;
                var resultText = document.getElementById("placeholder6");
                lengthP11 = document.getElementById('input-Ls').value; 
                $('#input-Ls-hide').val(lengthP11);
                console.log("Length is : "+  $('#input-Ls-hide').val());
                widthP11 = document.getElementById('input-Ws').value;
                $('#input-Ws-hide').val(widthP11);
                console.log("width is : "+  $('#input-Ws-hide').val());
                var volume = lengthP11 * widthP11 * 3 ;
                $('#volum-Drainage').val(volume);
                console.log("volue Drainage:"+ document.getElementById('volum-Drainage').value);
                resultText.innerHTML = '<span id="area-p">  يحسب ارتفاع الخزان (3) متر <br> حجم بيارة الصرف = ' +volume +' متر مكعب      </span>';
                break ;
        } // End switch
    } // End Fun

// Error Message Functions
    function displayError(msg) {
        var resultText = document.getElementById("result-placeholder");
        resultText.innerHTML = msg;
    };
    function displayErrorPage10(msg) {
        var resultText = document.getElementById("placeholder5");
        resultText.innerHTML = msg;
    
    };
    function displayErrorPage11(msg) {
        var resultText = document.getElementById("placeholder6");
        resultText.innerHTML = msg;
    
    };

// Result Function
    function displayResult([l, w], area) {
        
        switch ( $('#flag-functions').val()){
                
            case "1" :
                 var resultText = document.getElementById("result-placeholder");
                resultText.innerHTML = '<span id="area-p">  مساحة الأرض =  ' + area.toFixed(2)  +  '  متر مربع  </span>';
                console.log("area:"+ document.getElementById('input-result-hidden').value);
               
                 break;
                
            case "10" :
                var resultText = document.getElementById("placeholder5");
                resultText.innerHTML = '<span id="area-p">  يحسب ارتفاع الخزان (3) متر <br> حجم خزان المياه الأرضي = ' +area.toFixed(2) +' متر مكعب   </span>';
                 break ;
                
            case "11":
                var resultText = document.getElementById("placeholder6");
                resultText.innerHTML = '<span id="area-p">  يحسب ارتفاع الخزان (3) متر <br> حجم بيارة الصرف = ' +area.toFixed(2) +' متر مكعب   </span>';
                 break;
        } // End switch
    } 

    function validateInputs() {
         
                let errorMsg = "";
                const l = (parseFloat(document.getElementById("input-L").value)).toFixed(2); 
                const w = (parseFloat(document.getElementById("input-W").value)).toFixed(2); 
                if (isNaN(l) || isNaN(w)) 
                    errorMsg =" ! يرجى إدخال  الطول والعرض ";
                  if(l <=0 || l<15 || l>50 )
                    errorMsg =" يرجى إدخال الطول  بين 15 و 50 متراً ";
                if( w <=0 || w<15 || w>50 )
                    errorMsg =" يرجى إدخال  العرض بين 15 و 50 متراً ";
                $('#input-L-hide').val(l);
                $('#input-W-hide').val(w);
                return {
                    values: [l,w],
                    errorMsg
                };
            
                
    }
    function validateInputsPage10() {
        let errorMsg = "";
        const lw = parseFloat(document.getElementById("input-Lw").value); 
        const Ww = parseFloat(document.getElementById("input-Ww").value);
        console.log( "Lw2 : "+ lw);
        console.log( "Ww2 : "+ Ww);
        if (isNaN(lw) || isNaN(Ww)) {
            errorMsg =" ! يرجى إدخال  الطول والعرض ";
        } if(Ww == 0 || lw == 0){errorMsg="   لا يوجد خزان مياه ";}
        else if(lw <0 ||  lw>15 || lw<3){
            errorMsg ="   يرجى إدخال الطول بين 3 و 15 متراً أو صفراً";
        }else if(Ww <0 ||  Ww>8 || Ww<2){
            errorMsg ="   يرجى إدخال العرض بين 2 و 8 متراً أو صفراً";
        }
        $('#input-Lw1-hide').val(lw);
        $('#input-Ww-hide').val(Ww);
        return {
            values: [lw,Ww],     
            errorMsg
        };
 }
    function validateInputsPage11() {
         
        let errorMsg = "";
        const Ls = parseFloat(document.getElementById("input-Ls").value); 
        const Ws = parseFloat(document.getElementById("input-Ws").value);
        if (isNaN(Ls) || isNaN(Ws)) {
            errorMsg =" ! يرجى إدخال  الطول والعرض ";
        } if(Ws == 0 || Ls == 0){errorMsg ="   لا يوجد بيارة صرف ";}
        else if(Ls <0 ||  Ls>15 || Ls<3){
            errorMsg ="   يرجى إدخال الطول بين 3 و 15 متراً أو صفراً";
        }else if(Ws <0 ||  Ws>8 || Ws<2){
            errorMsg ="   يرجى إدخال العرض بين 2 و 8 متراً أو صفراً";
        }
         $('#input-Ls-hide').val(Ls);
        $('#input-Ws-hide').val(Ws);
        return {
            values: [Ls,Ws],     
            errorMsg
        };
    }

// Main Functions //
    function Main(){
      
                const resultText = document.getElementById("result-placeholder");
                $('#input-L,#input-W').on('change keydown paste input keyup', function(){

                    const { errorMsg, values } = validateInputs();                          
                    if (errorMsg) {
                        displayError(errorMsg);
                        resultText.style.color=  '#686869';
                    } else {
                        const ar = area(values);
                        displayResult(values, ar);
                    }
              });
                }
    function MainPage10(){   
                    const resultText1 = document.getElementById("placeholder5");
                $('#input-Lw,#input-Ww').on('change keydown paste input keyup', function(){

                    const { errorMsg, values } = validateInputsPage10();
                    if (errorMsg) {
                       displayErrorPage10(errorMsg);

                        resultText1.style.color=  '#686869';
                    } else {
                        console.log( "Lw : "+$('#input-Lw1-hide').val());
                        console.log( "Ww : "+$('#input-Ww-hide').val());
                        const vol = volume(values);
                        displayResult(values, vol);
                    }
                });
                }         
    function MainPage11(){
                const resultText2 = document.getElementById("placeholder6");
                $('#input-Ls,#input-Ws').on('change keydown paste input keyup', function(){

                    const { errorMsg, values } = validateInputsPage11();
                    if (errorMsg) {
                        displayErrorPage11(errorMsg);
                        resultText2.style.color=  '#686869';
                    } else {
                        const vol = volume(values);
                        displayResult(values, vol);
                    }
                });
         }
   
// Area Function 
    function area([num1, num2]){
        $('#input-result-hidden').val(num1*num2);
        return num1*num2;            
    }

// volum Function 
    function volume([num1, num2 ]){
        
        switch ( $('#flag-functions').val()){
                
            case "10" :
                $('#volum-GroundTank').val(num1*num2*3);
                return num1*num2*3;
                 break ;
                
            case "11" :
                $('#volum-Drainage').val(num1*num2*3);
                return num1*num2*3;
                break;
                
        } // End switch
    }

    function decrease() {
        console.log( "flag-functions for dec:   "+$('#flag-functions').val()  );
        switch ( $('#flag-functions').val()){
            case "4" :
                var value = $(this).parent().find('[data-value2]').val();
                if(value > 100 ) {
                    value--;
                    $(this).parent().find('[data-value2]').val(value);
                    console.log("value: "+ value);
                    $("#input-A0").val(value) ;
                    console.log("area:"+ document.getElementById('input-A0').value);
                    document.getElementById("placeholder1").innerHTML="";
            
                }else{
                    document.getElementById("placeholder1").innerHTML="   يجب ألا تقل مساحة الدور الأرضي عن 100 متر مربع  ";
                    $(this).parent().find('[data-value2]').val(100);
                    $("#input-A0").val(100);
                }
                break; 
            case "5":
                var value = $(this).parent().find('[data-value3]').val();
                if(value > 100 ) {
                    value--;
                    $(this).parent().find('[data-value3]').val(value);
                    $("#input-A1").val(value) ;
                    console.log("area:"+ document.getElementById('input-A1').value);
                    document.getElementById("placeholder2").innerHTML="";
            
                }else{
                    document.getElementById("placeholder2").innerHTML="   يجب ألا تقل مساحة الدور العلوي عن 100 متر مربع  ";
                    $(this).parent().find('[data-value3]').val(100);
                    
                }
                break;
            case "7" :
                var value = $(this).parent().find('[data-value4]').val();
                if(value > 50 ) {
                    value--;
                    $(this).parent().find('[data-value4]').val(value);
                    $("#input-A2").val(value) ;
                    console.log("A2:"+ document.getElementById('input-A2').value);
                    document.getElementById("placeholder3").innerHTML="";
            
                }else{
                    document.getElementById("placeholder3").innerHTML="   يجب ألا تقل مساحة الملحق العلوي عن 50 متر مربع  ";
                    $(this).parent().find('[data-value4]').val(50);
            }
                break;
            case "9":
                var value = $(this).parent().find('[data-value5]').val();
                if(value > 50 ) {
                    value--;
                    $(this).parent().find('[data-value5]').val(value);
                    $("#input-A3").val(value) ;
                    console.log("A3:"+ document.getElementById('input-A3').value);
                    document.getElementById("placeholder4").innerHTML="يسمح بإنشاء القبو <br> على كامل مسطح الأرض";
                }else{
                    document.getElementById("placeholder4").innerHTML="   يجب ألا تقل مساحة القبو عن 50 متر مربع  ";
                    $(this).parent().find('[data-value4]').val(50); 
                    $("#input-A3").val(50) ;
                }
                break;
        }
    }  // end fun dec
    function increase() {
        console.log( "flag-functions for inc:   "+$('#flag-functions').val()  );
        switch ( $('#flag-functions').val()){
                
            case "4":
                var value = $(this).parent().find('[data-value2]').val();
                if(value <  $("#Max-L-page4").val() && value >= 100 ) {
                    $(this).parent().find('[data-value2]').val(value);
                    value++;
                    $(this).parent().find('[data-value2]').val(value);
                    console.log("value: "+ value);
                    $("#input-A0").val(value) ;
                    console.log("area:"+ document.getElementById('input-A0').value);
                    document.getElementById("placeholder1").innerHTML="";
                }else if(value < 100){
                    document.getElementById("placeholder1").innerHTML="  يجب ألا تقل مساحة الدور الأرضي عن   100 متر مربع  ";
                    $(this).parent().find('[data-value2]').val(100);
                }
                else{
                    document.getElementById("placeholder1").innerHTML="%يجب ألا تزيد مساحة الدور الأرضي عن 70  <br> من مساحة العقار  "
                    $(this).parent().find('[data-value2]').val($("#Max-L-page4").val());
                }
                break;
            case "5":
                var value = $(this).parent().find('[data-value3]').val();
                if(value <  $("#Max-L-page4").val() && value >= 100 ) {
                    $(this).parent().find('[data-value3]').val(value);
                    value++;
                    $(this).parent().find('[data-value3]').val(value);
                    console.log("value: "+ value);
                    $("#input-A1").val(value) ;
                    console.log("area:"+ document.getElementById('input-A1').value);
                    document.getElementById("placeholder2").innerHTML="";
                }else if(value < 100){
                    document.getElementById("placeholder2").innerHTML="  يجب ألا تقل مساحة الدور العلوي عن   100 متر مربع  ";
                    $(this).parent().find('[data-value3]').val(100);
                }
                else{
                    document.getElementById("placeholder2").innerHTML="%يجب ألا تزيد مساحة الدور العلوي عن 70  <br> من مساحة العقار  "
                    $(this).parent().find('[data-value3]').val($("#Max-L-page4").val());
                }
                break;
            case "7":
                    var value = $(this).parent().find('[data-value4]').val();
                    if(value <  $("#Max-L-page7").val() && value >= 50 ) {
                        $(this).parent().find('[data-value4]').val(value);
                        value++;
                        $(this).parent().find('[data-value4').val(value);
                        $("#input-A2").val(value) ;
                        console.log("A2:"+ document.getElementById('input-A2').value);
                        document.getElementById("placeholder3").innerHTML="";

                    }else if(value < 50){
                        document.getElementById("placeholder3").innerHTML="  يجب ألا تقل مساحة الملحق العلوي عن   50 متر مربع  ";
                        $(this).parent().find('[data-value4]').val(50);
                    }
                    else{
                        document.getElementById("placeholder3").innerHTML="% 50  يجب ألا تزيد مساحة الملحق العلوي عن <br> من مساحة العقار  "
                        $(this).parent().find('[data-value4]').val($("#Max-L-page7").val());
            }
                break;
            case "9":
                 var value = $(this).parent().find('[data-value5]').val();
                if(value <  $("#Max-L-page9").val() && value >= 50 ) {
                    $(this).parent().find('[data-value5]').val(value);
                    value++;
                    $(this).parent().find('[data-value5').val(value);
                    $("#input-A3").val(value) ;
                    console.log("A3:"+ document.getElementById('input-A3').value);
                    document.getElementById("placeholder4").innerHTML="";

                }else if(value < 50){
                    document.getElementById("placeholder4").innerHTML="  يجب ألا تقل مساحة القبو عن   50 متر مربع  ";
                    $(this).parent().find('[data-value5]').val(50);
                    $("#input-A3").val(50) ;

                }
                else {
                    document.getElementById("placeholder4").innerHTML="   يجب ألا تزيد مساحة القبو   <br> عن مساحة العقار  ";
                    $(this).parent().find('[data-value5]').val($("#Max-L-page9").val());
                }
                break;
        } //end switch
    } // end fun inc
    function valueChange1() {
        
        console.log( "flag-functions for valueChange1:   "+$('#flag-functions').val()  );
        switch ( $('#flag-functions').val()){
                
            case "4":
                var value = $(this).val();
                if(value == undefined || isNaN(value) == true || value <= 0 || value <100) {
                    $(this).val(100);
                    document.getElementById("placeholder1").innerHTML="يجب ألا تقل مساحة الدور الأرضي عن 100 متر مربع  ";
                     $("#input-A0").val(100);
                } else if(value > $("#Max-L-page4").val()) {
                    $(this).val($("#Max-L-page4").val());
                    document.getElementById("placeholder1").innerHTML=" %يجب ألا تزيد مساحة الدور الأرضي عن 70  <br> من مساحة العقار  "  ;
                    $("#input-A0").val($("#Max-L-page4").val());
                }else{
                    document.getElementById("placeholder1").innerHTML="";
                    $("#input-A0").val(value) ;
                    console.log("A0:"+ document.getElementById('input-A0').value);
                }
                break;
            case "5" :
                var value = $(this).val();
                if(value == undefined || isNaN(value) == true || value <= 0 || value <100) {
                    $(this).val(100);
                    document.getElementById("placeholder2").innerHTML="يجب ألا تقل مساحة الدور العلوي عن 100 متر مربع  ";
                    $("#input-A1").val(100);        
                }else if(value > $("#Max-L-page4").val()) {
                    $(this).val($("#Max-L-page4").val());
                    document.getElementById("placeholder2").innerHTML=" %يجب ألا تزيد مساحة الدور العلوي عن 70  <br> من مساحة العقار  "   ;
                    $("#input-A1").val($("#Max-L-page4").val());
                }else{
                    document.getElementById("placeholder2").innerHTML="";
                    $("#input-A1").val(value) ;
                    console.log("A1:"+ document.getElementById('input-A1').value);
                }
                break;
            case '7':
                var value = $(this).val();
                if(value == undefined || isNaN(value) == true || value <= 0 || value <50) {
                    $(this).val(50);
                    document.getElementById("placeholder3").innerHTML="يجب ألا تقل مساحة الملحق العلوي عن 50 متر مربع  ";
                    $("#input-A2").val(50);   
                } else if(value > $("#Max-L-page7").val()) {
                    $(this).val($("#Max-L-page7").val());
                    document.getElementById("placeholder3").innerHTML=" % 50  يجب ألا تزيد مساحة الملحق العلوي عن  <br> من مساحة العقار  "  ;
                    $("#input-A2").val($("#Max-L-page7").val());
                }else{
                    document.getElementById("placeholder3").innerHTML="";
                    $("#input-A2").val(value) ;
                    console.log("A2:"+ document.getElementById('input-A2').value);
                }
                break;
            case '9':
                var value = $(this).val();
                if(value == undefined || isNaN(value) == true || value <= 0 || value <50) {
                    $(this).val(50);
                    document.getElementById("placeholder4").innerHTML="  يجب ألا تقل مساحة القبو عن   50 متر مربع  ";
                    $("#input-A3").val(50);   
                } else if(value > $("#Max-L-page9").val()) {
                    $(this).val($("#Max-L-page9").val());
                    document.getElementById("placeholder4").innerHTML="   يجب ألا تزيد مساحة القبو   <br> عن مساحة العقار  ";
                    $("#input-A3").val($("#Max-L-page9").val());
                }if(value <  $("#Max-L-page9").val() && value > 50 ) {
                    document.getElementById("placeholder4").innerHTML="";
                    $("#input-A3").val(value) ;
                    console.log("A3:"+ document.getElementById('input-A3').value);
                }
                break;
        }//end switch
    } //  end fun valueChange1

    //**********************************//

    function show_main_div(clicked_id){
        
        switch (clicked_id){
            case  "next-page1" :
                $('#page2').css("display","block");        
                $('#page1').css("display","none");
                fill_button();
                break;
            case "next-page2" :
                $('#page3').css("display","block");        
                $('#page2').css("display","none");   
                $('#page1').css("display","none"); 
                Page3();
                break;
            case "pre-page2" :
                $('#page3').css("display","none");        
                $('#page2').css("display","none");   
                $('#page1').css("display","block");  
                Page1();
                break;
            case "next-page3" :
                $('#page4').css("display","block");        
                $('#page3').css("display","none"); 
                $('#page2').css("display","none");
                Page4();
                break;
            case "pre-page3" :  
                $('#page1').css("display","none");        
                $('#page2').css("display","block");   
                $('#page3').css("display","none");
                  fill_button();
                break;
            case "next-page4" :
                console.log("flag page3 is true : "+$('#flag3').val());

               if($('#flag3').val()  == "true"){
                   console.log("hi");

                    $('#input-A1').val(0);
                    $('#page6').css("display","block");  
                    $('#page5').css("display","none");  
                    $('#page4').css("display","none");
                    Page6();
                }else{
                    $('#page5').css("display","block");  
                    $('#page6').css("display","none");
                    $('#page4').css("display","none"); 
                    $('#page3').css("display","none");
                    Page5();
                }
               break;
            case "pre-page4" :  
                $('#page1').css("display","none");        
                $('#page2').css("display","none");   
                $('#page3').css("display","block");
                $('#page4').css("display","none");
                Page3();
                break;
            case "next-page5" :
                $('#page4').css("display","none");
                $('#page5').css("display","none");
                $('#page6').css("display","block");
                Page6();
                break;
            case "pre-page5" :  
                $('#page3').css("display","none");
                $('#page4').css("display","block"); 
                $('#page5').css("display","none");
                Page4();
                break;
            case "next-page6" :
                $('#page5').css("display","none");
                $('#page6').css("display","none");
                $('#page7').css("display","block");
                Page7();
                break;
            case "pre-page6" : 
                if($('#flag3').val()  == "true"){
                    $('#page4').css("display","block");
                    $('#page5').css("display","none");
                    $('#page6').css("display","none");
                    Page4();
                }else{
                    $('#page4').css("display","none");
                    $('#page5').css("display","block");
                    $('#page6').css("display","none");
                    Page5();
                }
                break;
            case "next-page7" :
                $('#page8').css("display","block");
                $('#page7').css("display","none"); 
                $('#page6').css("display","none");
                Page8();
                break;
            case "pre-page7" :
                $('#page6').css("display","block");
                $('#page7').css("display","none"); 
                $('#page5').css("display","none");
                Page6();
                    break;
                case "next-page8" :
                    $('#page9').css("display","block");
                    $('#page7').css("display","none"); 
                    $('#page8').css("display","none");
                    Page9();
                break;
            case "pre-page8" :
                if($('#flag6').val()  == "true"){
                    $('#page7').css("display","block");
                    $('#page8').css("display","none"); 
                    $('#page9').css("display","none");
                    Page7();
                }else{
                    $('#page6').css("display","block");
                    $('#page7').css("display","none"); 
                    $('#page8').css("display","none"); 
                    $('#page9').css("display","none"); 
                    Page6();
                }
                break;
            case "next-page9" :
                    $('#page10').css("display","block");  
                    $('#page9').css("display","none");  
                    $('#page8').css("display","none");
                    Page10();
                    break;
            case "pre-page9" :
                    $('#page8').css("display","block");  
                    $('#page9').css("display","none");
                    $('#page7').css("display","none");
                    Page8();
               break;
            case "next-page10" :
                    $('#page11').css("display","block");  
                    $('#page10').css("display","none");  
                    $('#page9').css("display","none");
                    $('#page12').css("display","none");
                    Page11();
                    break;
            case "pre-page10" :
               if($('#flag8').val()  == "true"){
                    $('#page9').css("display","block");  
                    $('#page8').css("display","none");
                    $('#page10').css("display","none");
                    $('#input-A3').val(0);
                    Page9();
                }else{
                    $('#page8').css("display","block");  
                    $('#page10').css("display","none");
                    $('#page9').css("display","none");
                    Page8();
                }
                break;
            case "next-page11" :
                    $('#page12').css("display","block");  
                    $('#page11').css("display","none");
                    $('#page10').css("display","none");
                   ResultsPage();
               break;
            case "pre-page11" :
                    $('#page10').css("display","block");  
                    $('#page11').css("display","none");  
                    Page10();
                    break;
            case "pre-page12" :
                $('#page11').css("display","block");  
                $('#page12').css("display","none");
                $('#page10').css("display","none"); 
                $('#page9').css("display","none"); 
                Page11();
                break;
        }   
    }

    //------ js for page 2:--------

    var RN0 = 0 ;
    var RNarray = ['الأرض لا تطل على شوارع', 'الأرض تطل على شارع واحد', 'الأرض تطل على شارعين', 'الأرض تطل على ثلاثة شوارع', 'الأرض تطل على أربعة شوارع'];
    var vl = [];
 //   var flag =false ;

    function fill_button(){
        
                document.getElementById("1").innerHTML=$('#input-W-hide').val();
                document.getElementById("2").innerHTML=$('#input-L-hide').val();
                document.getElementById("3").innerHTML=$('#input-W-hide').val();
                document.getElementById("4").innerHTML=$('#input-L-hide').val();
            
            $(function() {  
                
                $('.btn').click(function(){
                    if($(this).hasClass('active')){
                        $(this).removeClass('active');
                        RN0 = RN0 - 1 ;
                         console.log(RN0);
                        flag = false ;
                        var removeValue = this.textContent;
                        var index = vl.indexOf(removeValue);
                        vl.splice(index, 1);
                    }else {
                        $(this).addClass('active');
                        RN0 = RN0 + 1 ;
                         flag =true ;
                        vl[this.id] = this.textContent  ;
                        $("#btnval").val(this.textContent);
                     console.log($("#btnval").val());

                    }
                    $('#num-str-hidden').val(convert(RN0));
                   document.getElementById("placeholder-page2").innerHTML = $('#num-str-hidden').val();

                 var filtered = vl.filter(function (el) {
                     return el != null;
                 });
                 printresult(filtered);
                   vl = vl.map(Number);
                    console.log(vl);
                    var sum_vl = vl.reduce(function(a, b){
                        return a + b;
                    }, 0);
                    console.log(sum_vl);
                    $('#vl-hidden').val(sum_vl);
                });
                
            });
       
        }
    function convert(num) {  return RNarray [num];}  

    function printresult(filter){
        
        var resultText2 =document.getElementById("result-praghragh-page2").innerHTML;
       
        for(var i= 1 ;i<=RN0 ;i++){
            
            if(flag == true){
                document.getElementById("result-praghragh-page2").innerHTML=  resultText2 + " <br> " + $("#btnval").val()+" "+
                    " : الواجهة   " +i   +" <br>" ;
                $("#result").val(resultText2);
            }  
            else{
                document.getElementById("result-praghragh-page2").innerHTML= $("#result").val();
            }
        }
       
    
    }

    //------- js for page 3:---------

  
    function Page3(){
    $(document).ready(function() {
        $('img.icon2').click(function() {
            $('#flag3').val("true");
            console.log("flag page3 is true : "+$('#flag3').val());
            $('#page4').css("display","block");  
            $('#page3').css("display","none"); 
            $('#page2').css("display","none");
            $('#page1').css("display","none");
             Page4();
        });
        $('img.icon1').click(function() {
            $('#flag3').val("false");
            console.log("flag page3 is true : "+$('#flag3').val());
            $('#page4').css("display","block");        
            $('#page3').css("display","none"); 
            $('#page2').css("display","none");
            $('#page1').css("display","none");
            Page4();
        });

    });  
}

    //------- js for page 4:--------- 

    function Page4(){
          $('#flag-functions').val(4);
        var max =  0.70* $("#input-result-hidden").val();
        var max1 = max.toFixed(2);
        $("#Max-L-page4").val(max1);
               console.log("flag page3 is true : "+$('#flag3').val());

        $(function() {
            $('[data-decrease2]').click(decrease);
            $('[data-increase2]').click(increase);
            $('[data-value2]').change(valueChange1);
        });
    }

    //------- js for page 5:---------   

    function Page5(){
        $(function() {
              $('#flag-functions').val(5);
            
            $('[data-decrease3]').click(decrease);
            $('[data-increase3]').click(increase);
            $('[data-value3]').change(valueChange1);
        });
    }

    //------- js for page 6:---------  

  
    function Page6(){
        console.log("A1 : "+$('#input-A1').val());
         $('img.true').click(function() {
              $('#flag6').val("true");
              console.log("flag page6  "+$('#flag6').val());
             $('#page7').css("display","block");
             $('#page8').css("display","none");
             $('#page9').css("display","none");
             $('#page10').css("display","none");
             $('#page11').css("display","none");
             $('#page12').css("display","none");
             $('#page4').css("display","none");
             $('#page5').css("display","none");
             $('#page6').css("display","none");
             Page7();
         });
         $('img.wrong').click(function() {
             $('#flag6').val("false");
             console.log("flag page6  "+$('#flag6').val());
             $('#input-A2').val(0);
             $('#page8').css("display","block");
             $('#page9').css("display","none");
              $('#page10').css("display","none");
             $('#page11').css("display","none");
             $('#page12').css("display","none");
             $('#page7').css("display","none");
             $('#page6').css("display","none");
             $('#page4').css("display","none");
             $('#page5').css("display","none");
             Page8();
         });        
        
    }

   //------- js for page 7:---------  

    function Page7(){
          $('#flag-functions').val(7);
        var max= 0.50*$("#input-A0").val(); ;
        const  max1 = max.toFixed(2);
         $("#Max-L-page7").val(max1);
        console.log( "Max value : "+$("#Max-L-page7").val());
        $(function() {
            $('[data-decrease4]').click(decrease);
            $('[data-increase4]').click(increase);
            $('[data-value4]').change(valueChange1);
        });   
    }

   //------- js for page 8:---------  
  
    function Page8(){ 
        $(document).ready(function() {
            $('img.true').click(function() {
                 $('#flag8').val("true");
                console.log( $('#flag8').val());
                $('#page9').css("display","block");  
                $('#page8').css("display","none"); 
                $('#page7').css("display","none");
                Page9();
            });
            $('img.wrong').click(function() {
                $('#flag8').val("false");
               console.log( $('#flag8').val());
                $('#page10').css("display","block");        
                $('#page8').css("display","none"); 
                $('#page7').css("display","none");
                Page10();
            });
        });  
    }

 //------- js for page 9:---------  

    function Page9(){
          $('#flag-functions').val(9);
        var max = $("#input-result-hidden").val();
        $("#Max-L-page9").val(max);
        console.log("max is ; "+$("#Max-L-page9").val());
          $(function() {
            $('[data-decrease5]').click(decrease);
            $('[data-increase5]').click(increase);
            $('[data-value5]').change(valueChange1);
        });     
    }
   
//------- js for page 10:---------  

    function Page10(){
        console.log("A3 : "+  $('#input-A3').val());
        $(function() { 
              $('#flag-functions').val(10);
            $('#Lwi').click(increase_Li);
            $('#Wwi').click(increase_Wi);
            $('#Lwd').click(decrease_Ld);
            $('#Wwd').click(decrease_Wd);
            $('[ data-value6]').click(MainPage10);
        });
    }

//------- js for page 11:---------  

    function Page11(){
        $(function() { 
         
             $('#flag-functions').val(11);
            $('#Lsi').click(increase_Li);
            $('#Wsi').click(increase_Wi);
            $('#Lsd').click(decrease_Ld);
            $('#Wsd').click(decrease_Wd);
            $('[ data-value7]').click(MainPage11);
        }); 
        
    }

//------- js for  Results Page:---------  

    function ResultsPage(){
        
        const resultText = document.getElementById("dialoug-result");
        $('#buttons1 .btn1').on("click",function(){
            
            $("#buttons1 .btn1.active").removeClass('active');
            $(this).addClass("active");
            toggle_visibility('s1-L');
        });  
        
        $(".btn1").click(function(){
            
            calc(this.id);  
            
            switch(this.id){
                case "1":
                    resultText.innerHTML = '<span id="dialog-span1">  تكاليف  </span> <br> <span id="dialog-span2">  التشطيب العادي  </span> <br> <span id="dialog-span3"> '+  $('#total_price').val()+ '</span> <br> <span id="dialog-span1">  ريال سعودي  </span><br> <span id="dialog-span4">التكاليف الواردة أدناه هي تكاليف تقريبية للاسترشاد فقط وقد تختلف من مقاول لآخر ومن مدينة لأخرى</span>';
                    break ;
                case "2":
                    resultText.innerHTML = '<span id="dialog-span1">  تكاليف  </span> <br> <span id="dialog-span2">  التشطيب التجاري  </span> <br> <span id="dialog-span3"> '+  $('#total_price').val()+ '</span> <br> <span id="dialog-span1">  ريال سعودي  </span><br> <span id="dialog-span4">التكاليف الواردة أدناه هي تكاليف تقريبية للاسترشاد فقط وقد تختلف من مقاول لآخر ومن مدينة لأخرى</span>';
                    break ;
                case "3":
                    resultText.innerHTML = '<span id="dialog-span1">  تكاليف  </span> <br> <span id="dialog-span2">  تشطيب بناء عظم  </span> <br> <span id="dialog-span3"> '+  $('#total_price').val()+ '</span> <br> <span id="dialog-span1">  ريال سعودي  </span><br> <span id="dialog-span4">التكاليف الواردة أدناه هي تكاليف تقريبية للاسترشاد فقط وقد تختلف من مقاول لآخر ومن مدينة لأخرى</span>';
                    break ;
                case "4":
                    resultText.innerHTML = '<span id="dialog-span1">  تكاليف  </span> <br> <span id="dialog-span2">  تشطيب هاي كلاس  </span> <br> <span id="dialog-span3"> '+  $('#total_price').val()+ '</span> <br> <span id="dialog-span1">  ريال سعودي  </span><br> <span id="dialog-span4">التكاليف الواردة أدناه هي تكاليف تقريبية للاسترشاد فقط وقد تختلف من مقاول لآخر ومن مدينة لأخرى</span>';
                    break ;
                case "5":
                    resultText.innerHTML = '<span id="dialog-span1">  تكاليف  </span> <br> <span id="dialog-span2">  تشطيب كلاس  </span> <br> <span id="dialog-span3"> '+  $('#total_price').val()+ '</span> <br> <span id="dialog-span1">  ريال سعودي  </span><br> <span id="dialog-span4">التكاليف الواردة أدناه هي تكاليف تقريبية للاسترشاد فقط وقد تختلف من مقاول لآخر ومن مدينة لأخرى</span>';
                    break ;
                case "6":
                    resultText.innerHTML = '<span id="dialog-span1">  تكاليف  </span> <br> <span id="dialog-span2">  تشطيب لوكس  </span> <br> <span id="dialog-span3"> '+  $('#total_price').val()+ '</span> <br> <span id="dialog-span1">  ريال سعودي  </span><br> <span id="dialog-span4">التكاليف الواردة أدناه هي تكاليف تقريبية للاسترشاد فقط وقد تختلف من مقاول لآخر ومن مدينة لأخرى</span>';
                    break ;
                    
               
            }
        });
       
    }
    function toggle_visibility(id) {
        var e = document.getElementById(id);
        e.style.display = 'block';
    }
    function show1() {
        $('#show').css("display","none");            
        console.log("i'm here show");
        $('#upArrow').css("display","none");
        $('#downArrow').css("display","block");
        $('#hide').css("display","block");
        $('#block-result1').css("display","block");
        $('#block-result2').css("display","block");
    }
    function hide1() {
        $('#hide').css("display","none");
        $('#downArrow').css("display","none");    
        $('#upArrow').css("display","block");
        $('#show').css("display","block");
        $('#block-result1').css("display","none");
        $('#block-result2').css("display","none");
    }


    // Given an input field, this function will only allow numbers with up to two decimal places to be input.

    $(document).ready(function () {
        $('.number').keypress(function(event) {
        var $this = $(this);
        if ((event.which != 46 || $this.val().indexOf('.') != -1) &&
            ((event.which < 48 || event.which > 57) &&
             (event.which != 0 && event.which != 8))) {
            event.preventDefault();
        }

            var text = $(this).val();
            if ((event.which == 46) && (text.indexOf('.') == -1)) {
                setTimeout(function() {
                    if ($this.val().substring($this.val().indexOf('.')).length > 3) {
                        $this.val($this.val().substring(0, $this.val().indexOf('.') + 3));
                    }
                }, 1);
        }

            if ((text.indexOf('.') != -1) &&
            (text.substring(text.indexOf('.')).length > 2) &&
            (event.which != 0 && event.which != 8) &&
            ($(this)[0].selectionStart >= text.length - 2)) {
                event.preventDefault();
            }      
        });

        $('.number').bind("paste", function(e) {
            var text = e.originalEvent.clipboardData.getData('Text');
            if ($.isNumeric(text)) {
    if ((text.substring(text.indexOf('.')).length > 3) && (text.indexOf('.') > -1)) {
        e.preventDefault();
        $(this).val(text.substring(0, text.indexOf('.') + 3));
   }
}
            else {
        e.preventDefault();
     }
        });
    });

    // calculater  :
    function calc(id){
        
        $('#Frame').val(2 * $('#input-L-hide').val() + 2 * $('#input-W-hide').val());
        switch(id){
                // التشطيب العادي
            case "1" :
                $('#A0').val((1100 * $('#input-A0').val()));
                $('#A1').val((1000 * $('#input-A1').val()));
                $('#A2').val((1000 * $('#input-A2').val()));
                $('#A3').val((1350 * $('#input-A3').val()));
                $('#A4').val( ($('#vl-hidden').val()*900 + ( $('#Frame').val() - $('#vl-hidden').val()) * 700 ));
                $('#A5').val((75 * ( $('#input-result-hidden').val() - $('#input-A0').val() - ($('#Frame').val() *0.2))));
                $('#A6').val((400 * 4 * 1.05 *Math.sqrt($('#input-A0').val()))) ;
                 $('#Aw').val((1000 * $('#input-Lw1-hide').val() *$('#input-Ww-hide').val()));
                 $('#As').val((450 * $('#input-Ls-hide').val() *$('#input-Ws-hide').val()));
                var total = ( $('#A0').val() + $('#A1').val()+$('#A2').val()+$('#A3').val()+$('#A4').val()+$('#A5').val()+$('#A6').val()+$('#Aw').val()+
                 $('#As').val());
                 console.log("total : "+ total);
               $('#total_price').val(total);
                break;
                // تشطيب تجاري 
            case "2" :
                $('#A0').val((950 * $('#input-A0').val()));
                $('#A1').val((850 * $('#input-A1').val()));
                $('#A2').val((850 * $('#input-A2').val()));
                $('#A3').val((1200 * $('#input-A3').val()));
                $('#A4').val(($('#vl-hidden').val()*800 + ( $('#Frame').val() - $('#vl-hidden').val()) * 650 ));
                $('#A5').val((50 * ( $('#input-result-hidden').val() - $('#input-A0').val() - ($('#Frame').val() *0.2))));
                $('#A6').val((300 * 4 * 1.05 *Math.sqrt($('#input-A0').val())));
                $('#Aw').val((1000 * $('#input-Lw1-hide').val() *$('#input-Ww-hide').val()));
                $('#As').val((450 * $('#input-Ls-hide').val() *$('#input-Ws-hide').val()));
                var total = ( $('#A0').val() + $('#A1').val()+$('#A2').val()+$('#A3').val()+$('#A4').val()+$('#A5').val()+$('#A6').val()+$('#Aw').val()+
                             $('#As').val());
                 console.log("total : "+ total);
               $('#total_price').val(total);
                break;
                
                  //بناء عظم  
            case "3" :
                $('#A0').val((450 * $('#input-A0').val()));
                $('#A1').val((350 * $('#input-A1').val()));
                $('#A2').val((350 * $('#input-A2').val()));
                $('#A3').val((700 * $('#input-A3').val()));
                $('#A4').val(( $('#vl-hidden').val()*500 + ( $('#Frame').val() - $('#vl-hidden').val()) * 450 ));
                $('#A5').val((0 * ( $('#input-result-hidden').val() - $('#input-A0').val() - ($('#Frame').val() *0.2))));
                $('#A6').val((150 * 4 * 1.05 *Math.sqrt($('#input-A0').val())));
                 $('#Aw').val((900 * $('#input-Lw1-hide').val() *$('#input-Ww-hide').val() ));
                 $('#As').val((450 * $('#input-Ls-hide').val() *$('#input-Ws-hide').val() ));
                var total = ( $('#A0').val() + $('#A1').val()+$('#A2').val()+$('#A3').val()+$('#A4').val()+$('#A5').val()+$('#A6').val()+$('#Aw').val()+
                 $('#As').val());
                 console.log("total : "+ total);
               $('#total_price').val(total);
                break;
                
                  //هاي كلاس  
            case "4" :
                $('#A0').val((1800 * $('#input-A0').val()));
                $('#A1').val((1700 * $('#input-A1').val()));
                $('#A2').val((1700 * $('#input-A2').val()));
                $('#A3').val((2000 * $('#input-A3').val()));
                $('#A4').val( ($('#vl-hidden').val()*1200 + ( $('#Frame').val() - $('#vl-hidden').val()) * 800 ));
                $('#A5').val((150 * ( $('#input-result-hidden').val() - $('#input-A0').val() - ($('#Frame').val() *0.2)   )));
                $('#A6').val((700 * 4 * 1.05 *Math.sqrt($('#input-A0').val())));
                 $('#Aw').val((1200 * $('#input-Lw1-hide').val() *$('#input-Ww-hide').val() ));
                 $('#As').val((50 * $('#input-Ls-hide').val() *$('#input-Ws-hide').val() ));
                 var total = ( $('#A0').val() + $('#A1').val()+$('#A2').val()+$('#A3').val()+$('#A4').val()+$('#A5').val()+$('#A6').val()+$('#Aw').val()+
                 $('#As').val());
                 console.log("total : "+ total);
               $('#total_price').val(total);
                break;
                
                  // سوبر لوكس  
            case "5" :
                $('#A0').val((1500 * $('#input-A0').val()));
                $('#A1').val((1400 * $('#input-A1').val()));
                $('#A2').val((1400 * $('#input-A2').val()));
                $('#A3').val((1700 * $('#input-A3').val()));
                $('#A4').val( ($('#vl-hidden').val()*1100 + ( $('#Frame').val() - $('#vl-hidden').val()) * 800 ));
                $('#A5').val((120 * ( $('#input-result-hidden').val() - $('#input-A0').val() - ($('#Frame').val() *0.2)   )));
                $('#A6').val((600 * 4 * 1.05 *Math.sqrt($('#input-A0').val())));
                 $('#Aw').val((1200 * $('#input-Lw1-hide').val() *$('#input-Ww-hide').val() ));
                 $('#As').val((450 * $('#input-Ls-hide').val() *$('#input-Ws-hide').val() ));               
                var total = ( $('#A0').val() + $('#A1').val()+$('#A2').val()+$('#A3').val()+$('#A4').val()+$('#A5').val()+$('#A6').val()+$('#Aw').val()+
                             $('#As').val());
                console.log("total : "+ total);
                $('#total_price').val(total);
                break;
                
                //  لوكس
            case "6" :
                $('#A0').val(1300 * $('#input-A0').val());
                $('#A1').val(1200 * $('#input-A1').val());
                $('#A2').val(1200 * $('#input-A2').val());
                $('#A3').val(1500 * $('#input-A3').val());
                $('#A4').val($('#vl-hidden').val()*1000 + ( $('#Frame').val() - $('#vl-hidden').val()) * 750 );
                $('#A5').val(100 * ( $('#input-result-hidden').val() - $('#input-A0').val() - ($('#Frame').val() *0.2)   ));
                $('#A6').val(500 * 4 * 1.05 *Math.sqrt($('#input-A0').val()));
                 $('#Aw').val(1200 * $('#input-Lw1-hide').val() *$('#input-Ww-hide').val() );
                 $('#As').val(450 * $('#input-Ls-hide').val() *$('#input-Ws-hide').val() );
                var total =( $('#A0').val() + $('#A1').val()+$('#A2').val()+$('#A3').val()+$('#A4').val()+$('#A5').val()+$('#A6').val()+$('#Aw').val()+
                 $('#As').val());
               $('#total_price').val(total);
             
                break;
        }
    }

   