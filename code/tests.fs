module Tests
let helloWorldTest() = 
    Assert.areEqual "Hello World!" (Code.helloWorld())
    
let monkeysAndCoconutsTest() = 
    Assert.areEqual 3121 (Code.monkeysAndCoconuts(5))

let streamContainsTextTest() =
    let rnd = new System.Random(0)
    let testText = ["""The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made.""";                 
                    """We now come to the decisive step of mathematical abstraction: we forget about what the symbols stand for. ...[The mathematician] need not be idle; there are many operations which he may carry out with these symbols, without ever having to look at the things they stand for."""]

    let stream (text1:string) pos1 len1 = Seq.unfold (fun (text, pos, current, len, injected) -> 
                                                let genText len = 
                                                        let chars = {0..len} |> Seq.map (fun i -> rnd.Next(int ' ',int 'z') |> char) 
                                                        System.String.Join ("", chars)
                                                let size = String.length text / 3
                                                let nextState sizeAdded nowInjected = (text, pos, current + sizeAdded, len, nowInjected)
                                                if pos <= current && not injected then
                                                    Some (text, nextState text.Length true)
                                                else if current >= len then
                                                    None
                                                else 
                                                    Some (genText size, nextState size injected)
                                                ) (text1, pos1, 0, len1, false)

    Assert.isTrue (stream testText.[0] 5371 10075 |> (Code.streamContainsText testText.[0])) "Match expected"
    Assert.isFalse (stream testText.[1] 5371 10075  |> (Code.streamContainsText testText.[1])) "False positive detected"