<img src="https://i.imgur.com/YmNE2R2.png">

# Command Line Practice 

[Here's a Cheat Sheet](https://learntocodewith.me/command-line/unix-command-cheat-sheet/) if you get stuck.

## Episode X: A New Terminal

A long time ago in a Unix environment far, far away... young Jedi Padawans who knew only of desktop software were seduced by the dark side of the Force to enter:

The Terminal...

## Setup

- Navigate to your **labs** directory
- Fork + clone the repo at this step (see [**submitting homework**](https://git.generalassemb.ly/SEB-Base-Curriculum/submitting-homework))
- ‼️ **IMPORTANT: After you've cloned you need to `cd` into that directory.** (The directory should be called `CLI-practice-StarWars`.)
- Create a directory called `star_wars`.

#### Complete all work inside the `star_wars` folder and write the commands used for each step in the file called `solution.txt`.

## Part I: Set the Scene (`mkdir` and `touch`)

1. At the start of this lab, you should already be in a directory called `star-wars`.
2. Create a directory called `death_star`, and make the following files inside of it: `darth_vader.txt`, `princess_leia.txt`, `storm_trooper.txt`
3. Make another directory in `star_wars` called `galaxy_far_far_away` directory.
4. Inside of `galaxy_far_far_away`, make a directory named `tatooine` and create the following files in it: `luke.txt`, `ben_kenobi.txt`.
5. Inside of `tatooine` make a directory called `millenium_falcon`, and in it create `han_solo.txt` and `chewbacca.txt` files.

<br>

## Part II: `mv` - rename

- You can rename a file using the `mv` command.

1. Rename `ben_kenobi.txt` to `obi_wan.txt`.

<br>

## Part III: `cp` - copy

- You can copy a file from one location to another using the `cp` command. (`man cp` for more info)

1. Copy `storm_trooper.txt` from `death_star` to `tatooine`.

<br>

## Part IV: `mv` - move

- You can use the `mv` command to move files from one location to another. `mv` can be used for renaming, moving, or both. Run `man mv` to see the options—remember hit the `Q` key to get out of the manual page viewer.

1. Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`.

2. Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`.

3. Move `millenium_falcon` into `death_star`.

4. Move `princess_leia.txt` into the `millenium_falcon`.

<br>

## Part V: `rm` - remove

**BE CAREFUL WITH `rm`!!! THERE IS NO "TRASH" IN THE UNIX CLI. WHEN YOU DELETE SOMETHING IT IS GONE FOREVER!!!**

You can use `rm` to delete a file.

1. Delete `obi_wan.txt`.

<br>

## Part VI: All together

1. In `galaxy_far_far_away`, make a directory called `yavin_4`.

2. Move the `millenium_falcon` out of the `death_star` and into `yavin_4`.

3. Make a directory in `yavin_4` called `x_wing`.

4. Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`.

5. Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`.

6. In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`.

7. Move `darth_vader.txt` into `tie_fighter_1`.

8. Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`.

9. Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`.

<br>

## Part VII: `rm -r`: Remove directories and everything they contain

**BE CAREFUL WITH `rm`!!! THERE IS NO TRASH CAN IN THE UNIX CLI. WHEN YOU DELETE SOMETHING IT IS GONE FOREVER**

Before you hit enter, make sure are deleting the right thing, or you could accidentally delete the contents of your computer (it has happened).

This command will not typically ask you if you "really want to delete." It will just delete.

1. Remove `tie_fighter_2` and `tie_fighter_3`.

## Part VIII: May the Force Be With You..

1. Touch a file in `x_wing` called `the_force.txt`.

2. Destroy the `death_star` and anyone inside of it.

3. Return `x_wing` and the `millenium_falcon` to `yavin_4`.

# Homework submission Practice: Commit and push your updated code:

"Add" your changes (prepare them to be "committed"):

```bash
$ git add .
```

"Commit" your changes—any time you make a commit, you can always restore the files in the repo to that point:

```bash
$ git commit -m "Completed assignment"
```

"Push" your commits to github:

```bash
$ git push origin main
```

## Now, follow the directions on creating a pull request we went over in class [here](https://git.generalassemb.ly/SEB-Base-Curriculum/submitting-homework#making-the-pull-request)
