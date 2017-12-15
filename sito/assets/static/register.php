<?php

try  {
    $mode = trim($_POST['mode']);
    $email = trim($_POST['email']);
    $spam_trap = trim($_POST['name']);

    if (!empty($spam_trap)) {
        echo "error: spam";
        exit();
    }

    if (empty($email)) {
        echo "error: empty";
        exit();
    }

    if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        if ($mode == 'nojs')
            header('Location: ss_error.html');
        else
            echo "error: email";
    }
    else {
        $data = sprintf("%s|%s\n", date('Y-m-d'), $email);
        file_put_contents('../../subscriptions.txt', $data, FILE_APPEND);

        if ($mode == 'nojs')
            header('Location: ss_success.html');
        else
            echo "ok";
    }
}
catch(Exception $e) {
    echo "error: exception";
}
