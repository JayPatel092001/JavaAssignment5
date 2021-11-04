/*
    Assignment 5
    Jay Patel  
*/



$(document).ready(function()
{
    
        class ContentCard
        {
        id = 0;
        title = "titel";
        description = "Description";
        type = "type";


        constructor(id, title, description, type) 
        {
            this.id = id;
            this.title = title;
            this.description = description;
            this.type = type;
        }

        get id() 
        {
            return this.id;
        }
        set id(value) 
        {
            this.id = value;
        }
        get title() 
        {
            return this.title;
        }
        set title(value) 
        {
            this.title = value;
        }
        get description() 
        {
            return this.description;
        }
        set description(value) 
        {
            this.description = value;
        }
        get type() 
        {

            return this.type;
        }
        set type(value) 
        {
            this.type = value;
        }

        updateContent(title, description, type)
        {
            if(title != null && description != null && type != null)
            {
                this.title = title;
                this.description = description;
                this.type = type;
                
            }
        }

        toString()
        {
            
            return `<div id = "content-${this.id}">
                    <h4>${this.title}</h4>
                    <p>${this.description}</p>
                    <div>${this.type}</div>
                    </div>`;
        }

    }


    let movies = 
    [
        [0, 'Bahubali', 'Though both parts of Baahubali are essentially are fictional works, the epic movie series of director SS Rajamouli is inspired by several patches from the history of India.', 'Action Movie'],
        [1, 'Stayameva Jayate 2', 'Satyameva Jayate 2 is an upcoming Indian Hindi-language vigilante action film written and directed by Milap Zaveri with production ' ,'Action and Emotional movie'],
        [2, 'Radhe', 'It is a simple film where a cop is set to demolish the drugs racket.','Action and Romantic'],
        [3, 'Bhoot police', 'Two brothers, Vibhooti and Chiraunji, have fought their share of ghosts. A new case forces them to rethink their own abilities and beliefs.', 'Horror and Comedy'],
        [4,'Shershaah','The life of Indian army captain Vikram Batra, awarded with the Param Vir Chakra, India highest award for valour for his actions during the 1999 Kargil War.','Religious Movie']
    ];

    movies.forEach(movie => {
        let concard = new ContentCard(movie[0],movie[1],movie[2],movie[3]);
        $("#content-list").append(concard.toString());
    });

});

