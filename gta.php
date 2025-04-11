    $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, "https://n3tdata.com/api/user");
                curl_setopt($ch, CURLOPT_POST, 1);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt(
                   $ch, CURLOPT_HTTPHEADER, [
                        "Authorization: Basic ".base64_encode('username:password'),
                    ]
                );
                $json = curl_exec($ch);
                curl_close($ch);