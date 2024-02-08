import React from 'react'

import pen from '../../assets/pen.svg'
import comment from '../../assets/message.svg'
import blackLogo from '../../assets/black-logo.svg'

const Widget = () => {
    return (
        <div className="widget relative top-[40px] w-[300px]">
            <h4 className='text-md font-bold'>The Overflow Blog</h4>
            <div className="right-sidebar-div-1 flex flex-col gap-4 py-4">
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width="18" />
                    <p>
                        <a href='https://stackoverflow.blog/2021/09/08/observability-is-key-to-the-future-of-software-and-your-devops-career/' target='_blank'>Observability is key to the future of software (and your DevOps
                        career)</a>
                    </p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width="18" />
                    <p>
                        <a href='https://stackoverflow.blog/2021/09/10/podcast-374-how-valuable-is-your-screen-name/' target='_blank'>Podcast 374: How valuable is your screen name?</a>
                    </p>
                </div>
            </div>
            <h4 className='text-md font-bold'>Featured on Meta</h4>
            <div className="right-sidebar-div-1 flex flex-col gap-4 py-4">
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="pen" width="18" />
                    <p>
                        <a href='https://meta.stackexchange.com/questions/369013/review-queue-workflows-final-release/' target='_blank'>Review queue workflows - Final release....</a>
                    </p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="pen" width="18" />
                    <p>
                        <a href='https://meta.stackexchange.com/questions/369260/please-welcome-valued-associates-958-v2blast-959-spencerg' target='_blank'>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</a>
                    </p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={blackLogo} alt="pen" width="28" />
                    <p>
                        <a href='https://meta.stackoverflow.com/questions/411352/outdated-answers-accepted-answer-is-now-unpinned-on-stack-overflow' target='_blank'>Outdated Answers: accepted answer is now unpinned on Stack Overflow</a>
                    </p>
                </div>
            </div>
            <h4 className='text-md font-bold'>Hot Meta Posts</h4>
            <div className="right-sidebar-div-1 flex flex-col gap-4 py-4">
                <div className="right-sidebar-div-2">
                    <p>38</p>
                    <p>
                        <a href='https://meta.stackoverflow.com/questions/411364/why-was-this-spam-flag-declined-yet-the-question-marked-as-spam' target='_blank'>Why was this spam flag declined, yet the question marked as spam?</a>
                    </p>
                </div>
                <div className="right-sidebar-div-2">
                    <p>20</p>
                    <p>
                        <a href='https://meta.stackoverflow.com/questions/314342/why-does-a-high-rep-user-have-a-better-chance-of-getting-an-answer-than-a-low-re' target='_blank'>What is the best course of action when a user has high enough rep
                        to...</a>
                    </p>
                </div>
                <div className="right-sidebar-div-2">
                    <p>14</p>
                    <p>
                        <a href='https://meta.stackoverflow.com/questions/411396/is-a-link-to-the-how-to-ask-help-page-a-useful-comment' target='_blank'>Is a link to the "How to ask" help page a useful comment?</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Widget