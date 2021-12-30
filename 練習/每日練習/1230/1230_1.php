<?php

    $group = ['露西婭','瑪琳','巫女','兔子'];
    foreach($group as $group_id => $group){
      if($group == '瑪琳'){
        echo "$group 的位置是: $group_id 
        <br>";
      }else if($group == '露西婭'){
        echo "$group 的位置是: $group_id 
        <br>";
      }else{
        echo "剩下的人是 $group 位置是 $group_id<br><br>";
      }
    }

    $user = '小美';
    $behavior = true;
    if($behavior){
      echo $user.'走路';
      echo $user.'走路';
      echo $user.'跌倒';
    }else{
      echo $user.'在家睡覺';
    }

    class userCreate{
      public $name;
      public $hp;
      public $mp;
      public $atk;
      public $def;
    }


    $user1 = new userCreate();
    $user1->name = "露西婭";
    $user1->hp = 50;
    $user1->mp = 100;
    $user1->atk = 9999;
    $user1->def = 50;
    echo "<br> $user1->name 的能力值是 生命:$user1->hp , MP:$user1->mp , 攻擊:$user1->atk , 防禦:$user1->def";



?>