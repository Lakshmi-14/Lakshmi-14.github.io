<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Risk & Reward Analyzer</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: url('https://your-image-url.com/stock-market-background.jpg') no-repeat center center fixed;
            background-size: cover;
        }

        .container {
            background: rgba(255, 255, 255, 0.9); /* Semi-transparent background */
            border-radius: 15px;
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
            padding: 40px;
            max-width: 600px;
            width: 100%;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .container:hover {
            transform: scale(1.03);
            box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
        }

        h1 {
            color: #333;
            font-size: 2.5em;
            margin-bottom: 20px;
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
        }

        label {
            font-size: 1.2em;
            color: #555;
            margin-bottom: 8px;
            display: block;
            width: 100%;
            text-align: left;
        }

        input[type="text"] {
            padding: 14px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1.1em;
            width: 100%;
            max-width: 250px;
            margin-bottom: 20px;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        input[type="text"]:focus {
            border-color: #4a90e2;
            box-shadow: 0 0 8px rgba(74, 144, 226, 0.5);
            outline: none;
        }

        button {
            padding: 14px 28px;
            border: none;
            border-radius: 8px;
            background: linear-gradient(135deg, #4a90e2, #007aff);
            color: #ffffff;
            font-size: 1.2em;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.3s ease;
            white-space: nowrap;
        }

        button:hover {
            background: linear-gradient(135deg, #007aff, #004bbf);
            transform: translateY(-2px);
        }

        .results {
            margin-top: 10px; /* Reduced top margin */
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .results h2 {
            color: #333;
            font-size: 1.8em;
            margin-bottom: 15px;
        }

        .results p {
            font-size: 1.2em;
            margin: 10px 0;
        }

        .stop-loss-text {
            color: #e74c3c; /* Red color */
        }

        .target-text {
            color: #2ecc71; /* Green color */
        }

        .stop-loss-value, .target-value {
            color: #333; /* Default text color */
        }

        .footer {
            margin-top: 20px;
            text-align: center;
            color: #555;
        }

        .footer a {
            text-decoration: none;
            color: #4a90e2;
            font-size: 1.1em;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        .footer img {
            width: 24px;
            height: 24px;
            vertical-align: middle;
            margin-right: 8px;
        }

        .form-group {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: center;
        }

        label {
            margin: 0; /* Remove margin from label */
        }

        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }

            input[type="text"], button {
                font-size: 1em;
            }

            .form-group {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Risk & Reward Analyzer</h1>
        <form method="post">
            {% csrf_token %}
            <div class="form-group">
                <label for="entry_price">Entry Price:</label>
                <input type="text" id="entry_price" name="entry_price" placeholder="Enter price" required>
                <button type="submit">Analyze</button>
            </div>
        </form>
        {% if entry_price %}
            <div class="results">
                <h2>Analysis Results:</h2>
                <p><span>Entry Price:</span> {{ entry_price }}</p>
                <p><span class="stop-loss-text">Stop Loss:</span> <span class="stop-loss-value">{{ stop_loss }}</span></p>
                <p><span>No. of Shares:</span> {{ no_of_shares }}</p>
                <p><span class="target-text">Target 1:</span> <span class="target-value">{{ target1 }}</span></p>
                <p><span class="target-text">Target 2:</span> <span class="target-value">{{ target2 }}</span></p>
                <p><span class="target-text">Target 3:</span> <span class="target-value">{{ target3 }}</span></p>
            </div>
        {% endif %}
        <div class="footer">
            <a href="https://www.instagram.com/bhagat.bunny/" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo">
                @bhagat.bunny
            </a>
        </div>
    </div>
</body>
</html>